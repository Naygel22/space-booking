import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Desk } from '../data';

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
  onBook: any
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
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          This desk is currently {desk.available ? 'free' : 'occupied'}.
        </Typography>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={onBook}>Book</Button>
      </Box>
    </Modal>
  );
};