export const styles = (isMobile:boolean)=> ({
  advantagesPageContainer: {
    padding: isMobile ? '25px 50px' :'50px 200px',
    backgroundColor: '#212429',
    color: 'white',
  },
  advantagesTitle: {
    textAlign: 'center',
    marginBottom: isMobile ? '20px':'50px',
    fontFamily: 'Ubuntu',
    fontWeight: '600',
    fontSize: isMobile ? '25px':'34px',
  }
});
