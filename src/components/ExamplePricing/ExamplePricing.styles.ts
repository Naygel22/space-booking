
export const styles = (isMobile:boolean)=> ({
  examplePricingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '40px'
  },
  examplePricingTitle: {
    marginBottom: '40px',
    color: '#212429',
    fontFamily: 'Ubuntu',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: isMobile ? '25px': '34px', 
  },
  examplePricingPlansBox:{
     paddingLeft: isMobile ? '25px' : '300px', 
     paddingRight: isMobile ? '25px': '300px', 
     width: '100%'
  },
  morePlansButton: {
    height: '50px',
    padding: '20px',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: '#8cb835',
    marginTop: '40px',
    marginBottom: '20px',
    color: 'white',
    fontSize: '18px',
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
  },
});
