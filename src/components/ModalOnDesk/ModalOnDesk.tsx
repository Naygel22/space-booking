import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Desk } from '../SpaceViewer/SpaceViewer.types';
import { MdElectricalServices, MdEventAvailable, MdHeight, MdLight, MdMonitor } from "react-icons/md";
import { styles } from './ModalOnDesk.styles';
import { Divider } from '@mui/material';
import { useNotificationContext } from '../../NotificationContext';


type ModalOnDeskProps = {
  desk: Desk,
  onClose: () => void,
  onBook: (desk: Desk) => void,
  selectedDate: string,
}

export type DeskFeatures = {
  monitors: number
  sockets: number
  hasLamp: boolean
  adjustableHeight: boolean
  otherAccessories?: string[]
}

const everyDeskFeatures = {
  monitors: 2,
  sockets: 3,
  hasLamp: true,
  adjustableHeight: true
}

export const ModalOnDesk = ({ desk, onClose, onBook }: ModalOnDeskProps) => {
  const { notify } = useNotificationContext()

  return (
    <Modal
      open={true}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.modalContentContainer}>
        <Typography sx={styles.deskName}>{desk.name}</Typography>
        <Button onClick={onClose} sx={styles.closeButton}>X</Button>
        <Box component="img" src=".//assets/images/desk2monitors.jpeg" alt="Desk with two monitors" sx={styles.desk2monitorsImg} />
        <Typography sx={styles.stationEquipmentTitle}>Station equipment</Typography>

        <Box sx={styles.modalDescription}>
          <Box sx={styles.featureInLine}>
            <MdEventAvailable style={{ fontSize: '19px' }} />
            <Typography sx={styles.featureLabel}>Available</Typography>
            <Typography sx={styles.featureValue}>Free</Typography>
          </Box>

          <Divider />

          <Box sx={styles.featureInLine}>
            <MdMonitor style={{ fontSize: '19px' }} />
            <Typography sx={styles.featureLabel}>Monitors</Typography>
            <Typography sx={styles.featureValue}>{everyDeskFeatures.monitors}</Typography>
          </Box>

          <Divider />

          <Box sx={styles.featureInLine}>
            <MdElectricalServices style={{ fontSize: '19px' }} />
            <Typography sx={styles.featureLabel}>Electrical sockets</Typography>
            <Typography sx={styles.featureValue}>{everyDeskFeatures.sockets}</Typography>
          </Box>

          <Divider />

          <Box sx={styles.featureInLine}>
            <MdLight style={{ fontSize: '19px' }} />
            <Typography sx={styles.featureLabel}>Lamp</Typography>
            <Typography sx={styles.featureValue}>{everyDeskFeatures.hasLamp ? 'Yes' : 'No'}</Typography>
          </Box>

          <Divider />

          <Box sx={styles.featureInLine}>
            <MdHeight style={{ fontSize: '19px' }} />
            <Typography sx={styles.featureLabel}>Adjustable height desk</Typography>
            <Typography sx={styles.featureValue}>{everyDeskFeatures.adjustableHeight ? 'Yes' : 'No'}</Typography>
          </Box>
        </Box>

        <Box sx={styles.buttonContainer}>
          <Button sx={styles.bookButton} onClick={() => {
            onBook(desk)
            notify('Your desk has been booked', "success")
          }}>Book</Button>
        </Box>
      </Box>
    </Modal>
  );
};
