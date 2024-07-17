import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  formContainer: {  
    marginTop: '50px'
  },
  textFieldBar: {
    marginBottom: '20px',
    display: 'flex',
    gap: '30px'
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  saveChangesButton: {
    height: '45px',
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
  }
};
