import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  contactPageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: "#2e2d2b",
    width: '60%',
    borderRadius: '20px',
    marginTop: '50px',
  },
  details: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '40px',
    marginBottom: '30px'
  },
  description: {
    fontWeight: 'bold',
    fontSize: '22px',
    marginBottom: '10px'
  },
  contactDetail: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  contactFormContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '600px',
    gap: '15px'
  },
  sendMessageButton: {
    height: '50px',
    width: '70%',
    padding: '20px',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: '#8cb835',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    border: 'none',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#afc786',
    },
  }
};
