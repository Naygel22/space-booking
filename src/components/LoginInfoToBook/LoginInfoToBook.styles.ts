import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: '30px',
    paddingBottom: '30px',
    marginTop: '50px',
    borderRadius: '10px',
    maxWidth: '50%',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  loginAccessImg: {
    width: '100%',
    height: 'auto',
    maxWidth: '300px',
    maxHeight: '300px',
    objectFit: 'contain',
    borderRadius: '150px',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    paddingRight: '70px',
    paddingTop: '30px',
    height: '100%',
    borderRadius: '0 10px 10px 0',
  },
  title: {
    marginBottom: '20px',
    color: '#666',
    fontWeight: 'bold'
  },
  description: {
    color: '#666'
  },
  accessLoginButton: {
    height: '50px',
    width: '170px',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: '#3b87a7',
    marginTop: '40px',
    marginBottom: '20px',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    border: 'none',
    '&:hover': {
      backgroundColor: 'orange',
    },
  },
};
