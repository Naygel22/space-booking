import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Desk } from '../SpaceViewer/SpaceViewer.types';
import { MdElectricalServices, MdEventAvailable, MdHeight, MdLight, MdMonitor } from "react-icons/md";
import { styles } from './ModalOnDesk.styles';


type ModalOnDeskProps = {
  desk: Desk,
  onClose: () => void,
  onBook: (desk: Desk) => void,
  selectedDate: any,
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
      <Box sx={styles.modalContentContainer}>
        <Button onClick={onClose} sx={styles.closeButton}>X</Button>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {desk.name}
        </Typography>
        <img src='.//assets/images/desk2monitors.jpeg' className='desk2monitorsImg' />
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

        </div>

        <Button onClick={() => onBook(desk)} sx={styles.bookButton}>Book</Button>
      </Box>
    </Modal>
  );
};
