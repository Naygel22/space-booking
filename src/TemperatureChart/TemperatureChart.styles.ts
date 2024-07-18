import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  chartContainer: { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center' 
  },
  title: { 
    fontSize: '25px',
     marginTop: '30px', 
     marginBottom: '40px' 
  },
  chart: { 
    width: '100%', 
    height: '450px',
    marginBottom: '-20px' 
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '30%'
  },
  minusButton: {
    border: '5px solid #FD7347',
    borderRadius: '10px',
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#2e2d2b',
    backgroundColor: '#FFAB91',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  plusButton: {
    border: '5px solid #FD7347',
    borderRadius: '10px',
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#2e2d2b',
    backgroundColor: '#FFAB91',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  arrowsIcon: {
    fontSize: '30px',
  }
}