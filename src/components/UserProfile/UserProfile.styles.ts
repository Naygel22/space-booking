import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  avatar: {
    width: 150, 
    height: 150, 
    fontSize: '40px' 
  },
  nameAndSurname: {
    display: 'flex',
    marginTop: '20px'
  },
  titleUserName: {
    marginRight: '10px',
    fontWeight: 'bold',
    fontSize: '25px'
  },
  titleUserSurname: {
    fontWeight: 'bold',
    fontSize: '25px'
  }
};
