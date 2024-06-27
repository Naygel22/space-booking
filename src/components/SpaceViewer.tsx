import { useEffect, useRef, useState } from 'react';
import { loadSmplrJs } from '@smplrspace/smplr-loader';
import { getAllDesks } from '../api/getAllDesks';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ModalOnDesk } from './ModalOnDesk';
import { UpdateDeskType, updateDeskById } from '../api/updateDeskById';
import { useSessionContext } from './SessionProvider';
import { LoginInfoToBook } from './LoginInfoToBook';

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

export const SpaceViewer = () => {

  const { session } = useSessionContext()
  if (!session) {
    //wywalić na login
    //albo info zaloguj się aby rezerwować
    return <LoginInfoToBook />
  }

  const [viewerReady, setViewerReady] = useState(false);
  const [selectedDesk, setSelectedDesk] = useState<Desk | null>(null);
  const [layerController, setLayerController] = useState<any>(undefined)
  const spaceRef = useRef<any>();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['desks'],
    queryFn: getAllDesks,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: UpdateDeskType) => { return await updateDeskById({ newStatus: data.newStatus, desk: data.desk }) },
    onSuccess: () => {
      refetch()
    },
    onError: () => {
      console.log("Something went wrong");
    }
  });

  const handleDeskClick = (desk: Desk) => {
    console.log('Selected desk:', desk);
    setSelectedDesk(desk);
  };

  const handleCloseModal = () => {
    setSelectedDesk(null);
  };

  const handleBook = (desk: Desk) => {
    console.log('Booking desk with ID:', desk.id);
    mutation.mutate({
      newStatus: false,
      desk: desk
    });
    setSelectedDesk(null)
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
              data: data || [],
              tooltip: (d) => `${d.name} - ${d.available ? 'free' : 'occupied'}`,
              color: (d) => (d.available ? '#50b268' : '#f75e56'),
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

    if (data && layerController) {
      layerController.update({
        data: data
      })
    }

  }, [data, layerController]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading desks</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <>
      <div className="smplr-wrapper">
        <div id="test" className="smplr-embed"></div>
      </div>

      {selectedDesk?.available && (
        <ModalOnDesk desk={selectedDesk} onClose={handleCloseModal} onBook={handleBook} />
      )}
    </>
  );
};