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
    width: '90%',
    margin: '50px auto',
    backgroundColor: '#464949',
    borderRadius: '10px'
  },
  datePickerContainer: {
    width: '33%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  spaceviewerContainer: {
    width: '100%'
  }

};
