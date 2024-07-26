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
     marginBottom: '-20px',
     fontFamily: 'Ubuntu',
    fontWeight: '600'
  },
  chart: { 
    width: '100%', 
    height: '550px' }
}