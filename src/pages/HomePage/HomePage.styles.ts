import { SxProps} from "@mui/material";

export const homepageContainer: SxProps = {
  width: '100%',
  height: '100%'
}

export const headingContainer = (isMobile:boolean)=> ({
  backgroundColor: '#1e2224',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  textAlign: 'center',
  paddingLeft: isMobile ? '50px' :'300px',
  paddingRight: isMobile ? '50px' :'300px',
  marginBottom: isMobile ? '250px' :'500px',
})

export const logo: SxProps = {
  width: '200px',
  marginBottom: '20px',
  borderRadius: '100px'
}

export const headingText = (isMobile:boolean)=> ({
    color: 'white',
    marginBottom: '10px',
    fontFamily: 'Ubuntu',
    fontWeight: '600',
    fontSize: isMobile ? '25px' :'34px',
})


export const subheadingText = (isMobile:boolean)=> ({
  color: 'white',
  fontFamily: 'Ubuntu',
  fontWeight: '400',
  fontSize: isMobile ? '15px' :'20px',
})

export const bookYourDeskNowButton = (isMobile:boolean)=> ({
  height: '50px',
  padding: '20px',
  borderRadius: '10px',
  cursor: 'pointer',
  backgroundColor: '#8cb835',
  marginTop: '40px',
  marginBottom: '20px',
  color: 'white',
  fontSize: isMobile ? '15px' :'18px',
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
})


