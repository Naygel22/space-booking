import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  modalContentContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    color: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borders: 'none',
  },
  closeButton: {
    position: 'absolute',
    top: 10, 
    right: 10, 
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: 'black',
    fontSize: '18px', 
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:active': {
      backgroundColor: 'transparent',
    },
    '&:focus': {
      backgroundColor: 'transparent',
    },
    '&:focus-visible': {
      outline: 'none',
    },
  },
  bookButton: {
    border: '1px solid black'
  }
  
}
