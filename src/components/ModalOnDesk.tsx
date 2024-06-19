import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Desk } from './SpaceViewer';

import { MdElectricalServices, MdEventAvailable, MdHeight, MdLight, MdMonitor } from "react-icons/md";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  color: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borders: 'none'
};

type ModalOnDeskProps = {
  desk: Desk,
  onClose: () => void,
  onBook: (desk: Desk) => void
}

export type DeskFeatures = {
  monitors: number
  sockets: number
  hasLamp: boolean
  adjustableHeight: boolean
  otherAccessories: string[]
}


export const ModalOnDesk = ({ desk, onClose, onBook }: ModalOnDeskProps) => {
  return (
    <Modal
      open={true}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {desk.name}
        </Typography>
        <img src='./src/assets/images/desk2monitors.jpeg' className='desk2monitorsImg' />
        <p>Equipment</p>

        <div className="modalDescription">

          <div className='featureInLine'>
            <div className='featureName'>
              <MdEventAvailable />
              <div>Available</div>
              {desk.available ? 'free' : 'occupied'}
            </div>
          </div>

          <div className='featureInLine'>
            <div className='featureName'>
              <MdMonitor />
              <div>Monitors</div>
            </div>
          </div>

          <div className='featureInLine'>
            <div className='featureName'>
              <MdElectricalServices />
              <div>Electrical sockets</div>
            </div>
          </div>

          <div className='featureInLine'>
            <div className='featureName'>
              <MdLight />
              <div>Lamp</div>
            </div>
          </div>

          <div className='featureInLine'>
            <div className='featureName'>
              <MdHeight />
              <div>Adjustable height desk</div>
            </div>
          </div>




          {/* <p>This desk is currently {desk.available ? 'free' : 'occupied'}.</p> */}
        </div>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={() => onBook(desk)}>Book</Button>
      </Box>
    </Modal>
  );
};