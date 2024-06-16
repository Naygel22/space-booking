import { useEffect, useRef, useState } from 'react';
import { loadSmplrJs } from '@smplrspace/smplr-loader';
import { getAllDesks } from '../api/getAllDesks';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ModalOnDesk } from './ModalOnDesk';
import { UpdateDeskType, updateDeskById } from '../api/updateDeskById';

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
}

export const SpaceViewer = () => {
  const [viewerReady, setViewerReady] = useState(false);
  const [selectedDesk, setSelectedDesk] = useState<Desk | null>(null);
  const spaceRef = useRef<any>(); //cannot import type Space

  const { data, isLoading, error } = useQuery({
    queryKey: ['desks'],
    queryFn: getAllDesks,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: UpdateDeskType) => updateDeskById({ newStatus: data.newStatus, deskId: data.deskId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['desks'] });
    },
    onError: () => {
      console.log("Something went wrong");
    }
  });

  const handleDeskClick = (desk: Desk) => {
    setSelectedDesk(desk);
  };

  const handleCloseModal = () => {
    setSelectedDesk(null);
  };

  const handleBook = (deskId: string) => {
    mutation.mutate({
      newStatus: true,
      deskId
    });
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
            spaceRef.current.addDataLayer({
              id: 'desks',
              type: 'furniture',
              data: data,
              tooltip: (d) => `${d.name} - ${d.available ? 'free' : 'occupied'}`,
              color: (d) => (d.available ? '#50b268' : '#f75e56'),
              onClick: (d) => {
                handleDeskClick(d);
              },
            });
          },
          onError: (error: string) => console.error('Could not start viewer', error),
        });
      })
      .catch((error) => console.error(error));
  }, [data]);

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

      {selectedDesk && (
        <ModalOnDesk desk={selectedDesk} onClose={handleCloseModal} onBook={handleBook} />
      )}
    </>
  );
};
