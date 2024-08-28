export const styles = (isMobile:boolean, isSmallMobile?:boolean)=> ({
  container: {
    borderRadius: '10px',
    marginTop: '50px',
    display: 'flex',
    backgroundColor: '#2e2d2b',
    width: isMobile ? '85%' : '70%',
    minHeight: '700px'
  },
  sidebar: {
    borderRight: '1px solid #ccc',
    paddingRight: isMobile ? '0' : '20px',
    paddingTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  flexDeskLogo: {
    width: isMobile ? '80%' : '200px',
    height: isMobile ? 'auto' : '200px',
    borderRadius: '150px',
    marginBottom: '30px'
  },
  button: {
    marginBottom: '10px',
    width: isSmallMobile ? '10%' : '80%',
    height: '40px',
    textAlign: 'left',
    fontSize: isMobile ? '12px' : '14px',
    color: 'white',
    textTransform: 'none',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: isSmallMobile ? 'center' :'flex-start',
    '&:hover': {
      backgroundColor: '#3c3c3c',
    },
  },
  buttonSelected: {
    marginBottom: '10px',
    width: isSmallMobile ? '10%' : '80%',
    height: '40px',
    textAlign: 'left',
    fontSize: isMobile ? '12px' : '14px',
    color: 'white',
    textTransform: 'none',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: isSmallMobile ? 'center' :'flex-start',
    '&:hover': {
      backgroundColor: '#3c3c3c',
    },
    backgroundColor: '#3c3c3c',
  },
  content: {
    padding: '20px',
    flexGrow: 1,
  },
  profileContainer: {
    padding: '20px',
  },
  reservationsContainer: {
    padding: '20px',
  },
  table: {
    marginTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableHeader: {
    fontWeight: 'bold',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
  },
  tableRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableCell: {
    padding: '10px',
    border: '1px solid #ccc',
  },
});
