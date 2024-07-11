import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { SpaceViewer } from "../../components/SpaceViewer/SpaceViewer"
import { useState } from "react";
import { LoginInfoToBook } from "../../components/LoginInfoToBook/LoginInfoToBook";
import { useSessionContext } from "../../components/SessionProvider";
import { Box } from "@mui/material";
import { styles } from "./BookingPage.styles";


export const BookingPage = () => {
  const { session } = useSessionContext()

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  if (!session) {
    return <LoginInfoToBook />
  }

  return (
    <Box sx={styles.bookingPageContainer}>

      <Box sx={styles.datePickerContainer}>
        <Box component="img" sx={styles.flexDeskLogo} src="src/assets/images/flexDeskLogo.jpeg" alt="Flex Desk Logo" />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Pick your date"
            disablePast
            views={['year', 'month', 'day']}
            value={selectedDate}
            onChange={handleDateChange}
            format="yyyy-MM-dd"
            sx={{
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
            }}
          />
        </LocalizationProvider>
      </Box>
      <Box sx={styles.spaceviewerContainer}>
        {selectedDate ? <SpaceViewer selectedDate={selectedDate.toString()} /> : null}
      </Box>
    </Box>
  );
};



