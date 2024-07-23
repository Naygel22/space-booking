import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  navbar: {
    backdropFilter: 'blur(10px)',
    bgcolor: 'transparent',
    height: '70px',
    paddingLeft: '80px',
    paddingRight: '80px',
    borderBottom: '1px solid beige',
    fontSize: '18px',
  },
  navbarButtons: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '300px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginRight: '25px',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      width: 0,
      height: '2px',
      backgroundColor: 'white',
      transition: 'all 0.3s ease',
      transform: 'translateX(-50%)',
    },
    '&:hover:after': {
      width: '100%',
    },
  },
  tourButton: {
    height: '35px',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: '#189AB4',
    padding: '15px',
    color: 'white',
    fontSize: '15px',
    fontWeight: 'bold',
    border: 'none',
    '&:hover': {
      backgroundColor: '#4AB3C6',
    },
  },
};
