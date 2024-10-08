export const styles = (isMobile:boolean, isSmallMobile?:boolean)=> ({
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
    fontWeight: '600',
    textAlign: 'center'
  },
  chart: { 
    width: '100%', 
    height: isSmallMobile ? '300px' : isMobile ? '400px' :'550px'
  }
})
