
export const styles = (isMobile:boolean)=> ({

  flexDeskLogo: {
    width: isMobile ? '30%': '200px',
    height: isMobile ? '30%': '200px',
    borderRadius: '150px',
    marginTop: isMobile ? '15px': '30px',
    marginBottom: isMobile ? '15px': '30px',
    marginLeft: isMobile ? '30px': '0'
  },
  bookingPageContainer: {
    display: 'flex',
    width: '85%',
    flexDirection: isMobile ? 'column': 'row',
    backgroundColor: '#464949',
    borderRadius: '10px',
  },
  datePickerContainer: {
    width: isMobile ? '60%': '33%',
    display: 'flex',
    flexDirection: isMobile ? 'row': 'column',
    alignItems: 'center',
  },
  spaceviewerContainer: {
    width: '100%'
  },
  dataPicker: {
    width: '100%',
    marginLeft: isMobile ? '60px': '0',
    '.MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    "& label.Mui-focused": {
      color: "white"
    },
    '.MuiInputBase-input': {
      color: 'white',
    },
    '.MuiInputLabel-root': {
      color: 'white',
    },
    '.MuiSvgIcon-root': {
      color: 'white',
    },
    '.MuiPickersDay-root': {
      color: 'white',
    },
  }
});
