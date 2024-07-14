import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  logoAndLoginForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '40px'
  },
  flexDeskLogo: {
    width: '200px',
    height: '200px',
    borderRadius: '150px'
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    padding: '40px',
    paddingBottom: 0,
    gap: '15px',
  },
  loginError: {
    fontSize: '13px',
    color: '#c52c2c'
  },
  loginButton: {
    height: '50px',
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
  googleLogo: {
    width: '20px',
    marginRight: '13px'
  },
  githubLogo: {
    width: '20px',
    marginRight: '15px'
  },
  loginIsNew: {
    backgroundColor: '#211f1c',
    height: '60px',
    marginTop: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0 0 10px 10px',
  },
  signupButtonInLoginForm: {
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '15px',
    textDecoration: 'none'
  },
  loginWithGoogleButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '45px',
    gap: '10px',
    backgroundColor: '#ffffff',
    color: '#24292e',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    marginTop: '20px',
    '&:hover': {
      backgroundColor: '#357ae8',
      color: 'white',
    }
  },
  loginWithGithubButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '45px',
    gap: '10px',
    backgroundColor: '#000000',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#24292e',
    }
  },
  divider: {
    fontSize: '13px',
    "&::before, &::after": {
      borderColor: "white",
    }
  }
};
