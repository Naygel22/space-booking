export const styles = (isMobile:boolean, isSmallMobile?:boolean)=> ({
  chartContainer: { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center' 
  },
  title: { 
    fontSize: '25px',
     marginTop: '30px', 
     marginBottom: '40px',
    fontFamily: 'Ubuntu',
    fontWeight: '600',
    textAlign: 'center'
  },
  chart: { 
    width: '100%', 
    height: isSmallMobile ? '400px' : '450px',
    marginBottom: '-20px' 
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: isSmallMobile ? '78%' :'30%',
  },
  minusButton: {
    border: '5px solid #FD7347',
    borderRadius: '10px',
    fontSize: isMobile ? '16px' :'25px',
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
    fontSize: isMobile ? '16px' :'25px',
    fontWeight: 'bold',
    color: '#2e2d2b',
    backgroundColor: '#FFAB91',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  arrowsIcon: {
    fontSize: isMobile ? '20px' :'30px',
  }
})