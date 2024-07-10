import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  cardContainer: {
    border: '1px solid white',
    borderRadius: '20px',
    backgroundColor: '#212429',
    color: 'white',
    padding: '20px 20px 0 20px',
    height: '100%'
  },
  advantageImg: {
    width: '30%',
    height: 'auto',
    margin: 'auto'
  },
  advantageText: {
    textAlign: 'center',
    padding: 0
  }
};
