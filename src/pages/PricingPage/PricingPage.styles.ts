import { SxProps } from "@mui/material";

export const pricingPageContainer: SxProps = {
  borderRadius: '20px',
  padding: '30px 0px 40px 0px',
  backgroundColor: '#242424',
  width: '65%',
  marginTop: '50px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

export const pricingPageTitle: SxProps = {
  fontSize: '24px',
  marginBottom: '20px',
  color: 'white',
  fontFamily: 'Ubuntu',
  fontWeight: '600'
};

export const pricingCardsGrid: SxProps = {
  padding: '0 20px 20px',
};

export const contactUsButton: SxProps = {
  height: '50px',
  padding: '20px',
  borderRadius: '10px',
  cursor: 'pointer',
  backgroundColor: '#8cb835',
  marginTop: '20px',
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
};


