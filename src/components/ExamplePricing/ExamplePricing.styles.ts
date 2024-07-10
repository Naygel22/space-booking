import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  examplePricingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '40px'
  },
  examplePricingTitle: {
    marginBottom: '40px',
    color: 'black'
  },
  morePlansButton: {
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
