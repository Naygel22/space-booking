import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  container: {
    height: "100%",
     display: "flex",
     justifyContent: "center",
     alignItems: "center"
  },
  paperArea: { 
    padding: 10, 
    width: '100%', 
    height: '100%', 
    backgroundColor: '#3c3a38',
    position: 'relative'
  },
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
    fontSize: '25px',
    color: 'white'
  },
  titleUserSurname: {
    fontWeight: 'bold',
    fontSize: '25px',
    color: 'white'
  },
  pencilIcon: {
    fontSize: '23px',
    color: 'white',
  },
  pencilButton: {
    '&:hover': {
      backgroundColor: 'transparent', 
    },
    '&:active': {
      backgroundColor: 'transparent', 
    },
  },
  dataTitle: {
    fontSize: '15px'
  },
  dataValue: {
    fontSize: '20px',
  },
  goBackButton: {
    position: 'absolute',
    left: 250,
    top: 252,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  leftArrowIcon: {
    fontSize: '21px',
    color: 'white', 
    '&:hover': {
      color: '#ff0000', 
    },
  },
};
