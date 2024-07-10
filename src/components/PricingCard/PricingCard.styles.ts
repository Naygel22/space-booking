import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  pricingCardContainer: {
    height: '100%',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    boxShadow: '0px 16px 32px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.03)',
    },
  },
  pricingCardImg: {
    height: 300,
    objectFit: 'cover',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  },
  pricingCardTitle: {
    fontWeight: 'bold',
    marginTop: '10px',
  },
  pricingCardText: {
    fontSize: '14px',
    marginTop: '10px',
  },
  pricingCardPrice: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#007bff',
  },
};