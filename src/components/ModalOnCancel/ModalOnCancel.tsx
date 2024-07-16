import { Modal, Box, Typography, Button } from '@mui/material';
import { styles } from './ModalOnCancel.styles';

type ModalOnCancelProps = {
  open: any,
  onConfirm: () => void,
  onClose: () => void,
}

export const ModalOnCancel = ({ open, onConfirm, onClose }: ModalOnCancelProps) => {
  return (
    <Modal open={open} onClose={onClose} sx={styles.modalBox}>
      <Box >
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={styles.modalTitle}>
          Are you sure you want to cancel this reservation?
        </Typography>
        <Box sx={styles.buttonBox}>
          <Button onClick={onConfirm} sx={styles.button}>
            Yes
          </Button>
          <Button onClick={onClose} sx={styles.button}>
            No
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};