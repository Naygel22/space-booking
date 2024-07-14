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
    boxShadow: 24,
    p: 4,
    borders: 'none',
  },
  deskName: {
    fontSize: '20px',
    fontWeight: 'bold'
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
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '20px',
    marginTop: '30px'
  },
  bookButton: {
    height: '40px',
    paddingLeft: '30px',
    paddingRight: '30px',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: '#8cb835',
    color: 'white',
    fontSize: '15px',
    fontWeight: 'bold',
    border: 'none',
    '&:hover': {
      backgroundColor: '#afc786',
    },
  },
  stationEquipmentTitle: {
    marginBottom: '20px',
    fontWeight: 'bold'
  },
  modalDescription: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  featureInLine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', 
    gap: '5px',
  },
  featureLabel: {
    flexGrow: 1, 
    fontSize: '15px'
  },
  featureValue: {
    marginLeft: 'auto', 
    fontSize: '15px'
  },
  desk2monitorsImg: {
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
    marginTop: '10px',
  }
};