export const styles = (isMobile:boolean, isSmallMobile?:boolean)=> ({
  container: {
    padding: isMobile ? '0' :'20px',
    borderRadius: '10px',
    backgroundColor: '#2e2d2b',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    borderBottom: '2px solid #000',
    marginBottom: '10px',

  },
  headerText: {
    fontWeight: '600',
    fontFamily: 'Ubuntu',
    fontSize: isSmallMobile ? '12px' : isMobile ? '16px' :'20px'
  },
  row: {
    borderBottom: '1px solid #ccc',
    padding: '10px 0',
    height: '50px',
  },
  cell: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  cellText: {
    fontSize: isSmallMobile ? '12px' : isMobile ? '14px' : '16px'
  },
  statusCompleted: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: isSmallMobile ? '12px' : isMobile ? '14px' : '16px'
  },
  cancelButton: {
    height: '30px',
    padding: '15px',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: '#bc4749',
    color: 'white',
    fontSize: isMobile ? '11px' : '13px',
    fontWeight: '600',
    border: 'none',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#d36a6d',
    },
  },
  paginationBox: {
    display: 'flex', 
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 'auto'
  },
  pagination: {
    color: 'white',
    '.MuiPaginationItem-root': { 
      color: 'white',
      '&.Mui-selected': {
        backgroundColor: 'white',
        color: 'black',
        fontWeight: 'bold',
        '&:hover': {
          backgroundColor: 'white', // ensures the hover state remains consistent
        }
      }
    }
  }
  
});
