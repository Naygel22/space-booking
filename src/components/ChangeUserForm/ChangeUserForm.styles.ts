export const styles = (isSmallMobile?:boolean)=> ({
  formContainer: {  
    marginTop: '50px'
  },
  textFieldBar: {
    marginBottom: '20px',
    display: 'flex',
    gap: '30px',
    flexDirection: isSmallMobile ? 'column' : 'row',
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  saveChangesButton: {
    height: '45px',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: '#8cb835',
    color: 'white',
    fontSize: isSmallMobile ? '13px' :'15px',
    fontWeight: 'bold',
    border: 'none',
    '&:hover': {
      backgroundColor: '#afc786',
    },
  }
});
