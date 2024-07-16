import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  modalBox: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    width: 400,
    height: 200,
    backgroundColor: 'white',
    padding: 4,
    boxShadow: 24,
    borderRadius: '20px',
  },
  modalTitle: {
     marginBottom: 2 
  },
  buttonBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    color: 'white',
    border: '1px solid white'
  }
};

