import { useEffect, useRef, useState } from 'react';
import { loadSmplrJs } from '@smplrspace/smplr-loader';
import { getAllDesks } from '../api/getAllDesks';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ModalOnDesk } from './ModalOnDesk';
import { UpdateDeskType, updateDeskById } from '../api/updateDeskById';
import { useSessionContext } from './SessionProvider';
import { LoginInfoToBook } from './LoginInfoToBook';
import { sendReservationValues } from '../api/sendReservationValues';
import { format } from 'date-fns';
import { getReservationForDate } from '../api/getReservationsForDate';


export interface Furniture {
  catalogId: string;
  id: string;
  name: string;
  levelIndex: number;
  position: {
    x: number;
    z: number;
    elevation: number;
  };
  rotation: Partial<{
    pitch: number;
    yaw: number;
    roll: number;
  }>;
  dimensions: Partial<{
    length: number;
    height: number;
    width: number;
  }>;
  configuration?: object;
  available?: boolean;
}

export interface Desk {
  name: string;
  available: boolean;
  furnitureId: string;
  id: string
}

export const SpaceViewer = ({ selectedDate }: { selectedDate: string }) => {
  console.log(selectedDate)

  const { session } = useSessionContext()

  const [viewerReady, setViewerReady] = useState(false);
  const [selectedDesk, setSelectedDesk] = useState<Desk | null>(null);
  const [layerController, setLayerController] = useState<any>(undefined)
  const spaceRef = useRef<any>();


  const { data: desks, isLoading, error, refetch } = useQuery({
    queryKey: ['desks'],
    queryFn: getAllDesks,
  });

  const { data: reservations } = useQuery({
    queryKey: ['reservations', selectedDate],
    queryFn: () => getReservationForDate(format(selectedDate, 'yyyy-MM-dd')),
  });

  console.log("reser", reservations)

  const handleDeskClick = (desk: Desk) => {
    console.log('Selected desk:', desk);
    setSelectedDesk(desk);
  };

  const handleCloseModal = () => {
    setSelectedDesk(null);
  };

  const handleBook = async () => {

    if (session && selectedDate && selectedDesk) {

      const formattedDate = format(selectedDate, 'yyyy-MM-dd');
      const success = await sendReservationValues({
        date: formattedDate,
        furnitureId: selectedDesk.furnitureId,
      });
      if (success) {
        console.log('Reservation successful');
        setSelectedDesk(null);
      } else {
        console.log('Reservation failed');
      }
      console.log(formattedDate)
    }
  };


  useEffect(() => {
    loadSmplrJs('esm')
      .then((smplr) => {
        spaceRef.current = new smplr.Space({
          spaceId: 'd4485320-78a3-4559-a76b-adacceb0df24',
          clientToken: 'pub_ac53b8c5d0404093b27c6e7910fc33ed',
          containerId: 'test',
        });

        spaceRef.current.startViewer({
          preview: true,
          allowModeChange: true,
          onReady: () => {
            setViewerReady(true);
            const controller = spaceRef.current.addDataLayer({
              id: 'desks',
              type: 'furniture',
              data: desks || [],
              tooltip: (d) => `${d.name} - ${d.available ? 'free' : 'occupied'}`,
              color: (d) => {
                // console.log("here", d)
                // console.log("2", reservations?.find(res => res.furnitureId === d.furnitureId) ? '#f75e56' : '#50b268')
                return reservations?.find(res => res.furnitureId === d.furnitureId) ? '#f75e56' : '#50b268';
              },
              onClick: (d) => {
                handleDeskClick(d);
              },
            });

            setLayerController(controller)
          },
          onError: (error: string) => console.error('Could not start viewer', error),
        });
      })
      .catch((error) => console.error(error));
  }, [])



  useEffect(() => {

    if (desks && layerController) {
      layerController.update({
        data: desks
      })
    }

  }, [desks, layerController]);


  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading desks</div>;
  }

  if (!desks) {
    return <div>No data</div>;
  }
  console.log(selectedDate)
  //console.log(format(selectedDate, 'EEEE, MMMM d'))
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