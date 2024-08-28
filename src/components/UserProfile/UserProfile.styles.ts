export const styles = (isMobile: boolean, isSmallMobile?: boolean) => ({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paperArea: { 
    padding: isMobile ? 5 : 10, 
    paddingLeft: isSmallMobile ? 10 : 1, 
    paddingRight: isSmallMobile ? 10 : 1, 
    width: '100%', 
    height: '100%', 
    backgroundColor: '#3c3a38',
    position: 'relative'
  },
  avatar: {
    width: isMobile ? 100 : 150, 
    height: isMobile ? 100 : 150, 
    fontSize: isMobile ? '30px' :'40px' 
  },
  nameAndSurname: {
    display: 'flex',
    marginTop: '20px'
  },
  titleUserName: {
    marginLeft: '20px',
    marginRight: '10px',
    fontWeight: 'bold',
    fontSize: isMobile ? '20px' :'25px',
    color: 'white'
  },
  titleUserSurname: {
    fontWeight: 'bold',
    fontSize: isMobile ? '20px' :'25px',
    color: 'white'
  },
  pencilIcon: {
    fontSize: isMobile ? '18px' :'23px',
    color: 'white',
    maxWidth: '100px'
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
    fontSize: isSmallMobile ? '12px' :'15px',
  },
  dataValue: {
    fontSize: isSmallMobile ? '15px' :'20px',
  },
  goBackButton: {
    position: 'absolute',
    left: isSmallMobile ? 50 : isMobile ? 25 : 180, // Zmiana left w zależności od rozmiaru ekranu
    top: isSmallMobile ? 150 : isMobile ? 200 : 252, // Zmiana top w zależności od rozmiaru ekranu
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
});
