import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

type ModalOnCancelProps = {
  buttonName: string,
  onConfirm: () => void
}

export default function ModalOnCancel({ onConfirm }: ModalOnCancelProps) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are you sure you want to delete this?"}
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={onConfirm} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
