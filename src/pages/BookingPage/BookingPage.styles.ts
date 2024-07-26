import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {

  flexDeskLogo: {
    width: '200px',
    height: '200px',
    borderRadius: '150px',
    marginTop: '30px'
  },
  bookingPageContainer: {
    display: 'flex',
    width: '85%',
 
    backgroundColor: '#464949',
    borderRadius: '10px',
  },
  datePickerContainer: {
    width: '33%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  spaceviewerContainer: {
    width: '100%'
  },
  dataPicker: {
    marginTop: '30px',
    width: '81%',
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
};
