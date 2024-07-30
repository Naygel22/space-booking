import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { SpaceViewer } from "../../components/SpaceViewer/SpaceViewer"
import { useEffect, useState } from "react";
import { LoginInfoToBook } from "../../components/LoginInfoToBook/LoginInfoToBook";
import { useSessionContext } from "../../components/SessionProvider";
import { Box } from "@mui/material";
import { styles } from "./BookingPage.styles";
import { useTourContext } from "../../components/TourContext";

const BookingPage = () => {
  const { session } = useSessionContext()
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const {
    setState,
    state: { stepIndex },
  } = useTourContext();

  useEffect(() => {
    if (stepIndex === 2) {
      setState({ run: true, stepIndex: 2 })
    }
  }, [])

  if (!session) {
    return <LoginInfoToBook />
  }

  return (
    <Box sx={styles.bookingPageContainer} id='booking-page'>

      <Box sx={styles.datePickerContainer}>
        <Box component="img" sx={styles.flexDeskLogo} src="/assets/images/flexDeskLogo.jpeg" alt="Flex Desk Logo" />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div id="datePickerID" style={{ width: "80%" }}>
            <DatePicker
              label="Pick your date"
              disablePast
              views={['year', 'month', 'day']}
              value={selectedDate}
              onChange={handleDateChange}
              format="yyyy-MM-dd"

              slotProps={{
                textField: {
                  required: true,
                  id: 'date-picker',
                },
              }}
              sx={styles.dataPicker}
            />
          </div>
        </LocalizationProvider>
      </Box>
      <Box sx={styles.spaceviewerContainer}>
        {selectedDate ? <SpaceViewer selectedDate={selectedDate.toString()} /> : null}
      </Box>
    </Box>
  );
};
export default BookingPage


