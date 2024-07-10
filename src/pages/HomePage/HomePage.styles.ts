import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  homepageContainer: {
    width: '100%',
  },
  headingContainer: {
    backgroundColor: '#1e2224',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    textAlign: 'center',
    paddingLeft: '300px',
    paddingRight: '300px',
    marginBottom: '500px'
  },
  logo: {
    width: '200px',
    marginBottom: '20px',
    borderRadius: '100px'
  },
  headingText: {
    color: 'white',
    marginBottom: '10px',
  },
  subheadingText: {
    color: 'white',
  },
  bookYourDeskNowButton: {
    height: '50px',
    padding: '20px',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: '#8cb835',
    marginTop: '40px',
    marginBottom: '20px',
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
  },

};
