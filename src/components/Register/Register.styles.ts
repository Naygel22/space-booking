import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  registerContainer: {
    marginTop: "50px",
    backgroundColor: "#2e2d2b",
    borderRadius: "10px",
    paddingLeft: 0,
    paddingRight: 0,
    width: '60%'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerImg: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
  },
  registerFormSide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px',
    paddingLeft: '30px',
    paddingRight: '30px',
    position: 'relative',
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  goBackButton: {
    position: 'absolute',
    left: 20,
    top: 20,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  leftArrowIcon: {
    fontSize: '22px',
    color: 'white', // Set the color of the icon
    '&:hover': {
      color: '#ff0000', // Change color on hover

    },
  },
  flexDeskLogo: {
    maxWidth: "30%",
    height: "auto",
    borderRadius: "200px",
    marginBottom: '20px'
  },
  registerForm: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
  textFieldBar: {
    marginBottom: '20px',
    display: 'flex',
    gap: '20px'
  },
  registerButton: {
    height: '50px',
    width: "100%",
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: '#8cb835',
    marginTop: '40px',
    marginBottom: '20px',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    border: 'none',
    '&:hover': {
      backgroundColor: '#afc786',
    },
  }
};
