import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  registerFirstForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '600px',
    backgroundColor: '#2e2d2b',
    borderRadius: '10px',
    marginTop: '20px',
    padding: '40px'
  },
  loginButton: {
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '15px',
    textDecoration: 'none',
    marginLeft: '450px',
    marginBottom: '30px'
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '40px',
  },
  registerFirstFormImg: {
    maxWidth: '80%',
    height: 'auto',
    borderRadius: '300px'
  },
  signupButton: {
    height: '50px',
    width: '100%',
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
  },
  divider: {
    fontSize: '13px',
    width: '100%',
    "&::before, &::after": {
      borderColor: "white",
    }
  },
  googleLogo: {
    width: '20px',
    marginRight: '13px'
  },
  githubLogo: {
    width: '20px',
    marginRight: '15px'
  },
  continueWithGoogleButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '45px',
    gap: '10px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    textTransform: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    marginTop: '20px',
    '&:hover': {
      backgroundColor: '#24292e',
    }
  },
  continueWithGithubButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '45px',
    gap: '10px',
    backgroundColor: '#000000',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    textTransform: 'none',
    cursor: 'pointer',
    marginTop: '20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#24292e',
    }
  },
};
