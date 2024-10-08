import { useEffect, useRef, useState } from 'react';
import { loadSmplrJs } from '@smplrspace/smplr-loader';
import { getAllDesks } from '../../api/getAllDesks';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ModalOnDesk } from '../ModalOnDesk/ModalOnDesk';
import { useSessionContext } from '../../context/SessionProvider';
import { sendReservationValues } from '../../api/sendReservationValues';
import { format } from 'date-fns';
import { getReservationForDate } from '../../api/getReservationsForDate';
import { Desk } from './SpaceViewer.types';
import { QUERY_KEYS } from '../../api/constants';

export const SpaceViewer = ({ selectedDate }: { selectedDate: string }) => {
  const { session } = useSessionContext();

  const [selectedDesk, setSelectedDesk] = useState<Desk | null>(null);
  const [layerController, setLayerController] = useState<any>(undefined);
  const spaceRef = useRef<any>();
  const queryClient = useQueryClient();

  const { data: desks, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.desks.getAll],
    queryFn: getAllDesks,
  });

  const { data: reservations, refetch: refetchReservation } = useQuery({
    queryKey: [QUERY_KEYS.reservations.getForDate, selectedDate],
    queryFn: () => getReservationForDate(format(selectedDate, 'yyyy-MM-dd')),
  });


  const handleDeskClick = (desk: Desk) => {
    setSelectedDesk(desk);

  };

  const handleCloseModal = () => {
    setSelectedDesk(null);
  };

  const reservationMutation = useMutation({
    mutationFn: (reservationData: { date: string; furnitureId: string }) => sendReservationValues(reservationData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.reservations.get] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.reservations.getAll] });
      setSelectedDesk(null);
      refetchReservation();
    },
    onError: () => {
      console.log('Reservation failed');
    },
  });

  const handleBook = () => {
    if (session && selectedDate && selectedDesk) {
      const formattedDate = format(selectedDate, 'yyyy-MM-dd');
      reservationMutation.mutate({
        date: formattedDate,
        furnitureId: selectedDesk.furnitureId,
      });
    }
  };

  const getDeskColor = (d: Desk) => reservations?.find(res => res.furnitureId === d.furnitureId) ? '#f75e56' : '#50b268';

  useEffect(() => {
    loadSmplrJs('esm')
      .then((smplr) => {
        spaceRef.current = new smplr.Space({
          spaceId: 'd4485320-78a3-4559-a76b-adacceb0df24',
          clientToken: 'pub_ac53b8c5d0404093b27c6e7910fc33ed',
          containerId: 'test',
        });

        spaceRef.current.startViewer({
          allowModeChange: true,
          onReady: () => {
            const controller = spaceRef.current.addDataLayer({
              id: 'desks',
              type: 'furniture',
              data: desks || [],
              tooltip: (d: Desk) => { return reservations?.find(res => res.furnitureId === d.furnitureId) ? `${d.name} - occupied` : `${d.name} - free` },
              color: getDeskColor,
              onClick: (d: Desk) => {
                if (!reservations?.find(res => res.furnitureId === d.furnitureId)) {
                  handleDeskClick(d);
                }
              },

            });

            setLayerController(controller);
          },
          onError: (error: string) => console.error('Could not start viewer', error),
        });
      })
      .catch((error) => console.error(error));
  }, [desks, reservations]);

  useEffect(() => {
    if (desks && layerController) {
      layerController.update({
        data: desks,
        tooltip: (d: Desk) => { return reservations?.find(res => res.furnitureId === d.furnitureId) ? `${d.name} - occupied` : `${d.name} - free` },
        color: getDeskColor,
        onClick: (d: Desk) => {
          if (!reservations?.find(res => res.furnitureId === d.furnitureId)) {
            handleDeskClick(d);
          }
        },
      })
    }
  }, [desks, layerController, reservations]);


  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading desks</div>;
  }
  if (!desks) {
    return <div>No data</div>;
  }

  return (
    <>
      <div className="smplr-wrapper">
        <div id="test" className="smplr-embed"></div>
      </div>

      {selectedDesk && (
        <ModalOnDesk desk={selectedDesk} onClose={handleCloseModal} onBook={handleBook} selectedDate={selectedDate} />
      )}
    </>
  );
};
