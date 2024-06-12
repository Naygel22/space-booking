import { useEffect, useRef, useState } from 'react';
import { loadSmplrJs } from '@smplrspace/smplr-loader';
import { desks } from '../data';

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
  const spaceRef = useRef<any>() //cannot import type Space

  useEffect(() => {
    loadSmplrJs('esm')
      .then((smplr) => {
        spaceRef.current = new smplr.Space({
          spaceId: 'd4485320-78a3-4559-a76b-adacceb0df24',
          clientToken: 'pub_ac53b8c5d0404093b27c6e7910fc33ed',
          containerId: 'test',
        });
        const smplrClient = new smplr.QueryClient({
          organizationId: '04ae416f-2dac-4dcf-a9ec-ac3ef07a9121',
          clientToken: 'pub_ac53b8c5d0404093b27c6e7910fc33ed',
        });
        smplrClient.getAllFurnitureInSpace('d4485320-78a3-4559-a76b-adacceb0df24')
          .then((data) => {
            const filteredDesks = data.filter(oneFurniture => oneFurniture.name === 'Desk');
            const processedData = filteredDesks.map(furniture => ({
              name: furniture.name,
              id: furniture.id,
              available: false
            }));
            spaceRef.current.startViewer({
              preview: true,
              allowModeChange: true,
              onReady: () => {
                setViewerReady(true)
                spaceRef.current.addDataLayer({
                  id: 'desks',
                  type: 'furniture',
                  //WHY IT SHOULD ALWAYS BE FROM A STATIC FILE?
                  data: processedData,
                  tooltip: (d) => `${d.name} - ${d.available ? 'free' : 'occupied'}`,
                  color: (d) => (d.available ? '#50b268' : '#f75e56'),
                  onClick: (d) => {
                    d.available === true
                    console.log("onclick", d)
                  }
                })
              },
              onError: (error: string) => console.error('Could not start viewer', error),
            });
          })

      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="smplr-wrapper">
        <div id="test" className="smplr-embed"></div>
      </div>

      <div>
        <h3>Furnitures in Space</h3>
        <ul>
          {desks.map((furniture, index) => (
            <li key={index}>
              {furniture.name} - {furniture.id}
            </li>
          ))}
        </ul>
      </div>
    </>

  );
};
