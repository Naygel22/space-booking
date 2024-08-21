import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { SpaceViewer } from "../../components/SpaceViewer/SpaceViewer"
import { useEffect, useState } from "react";
import { LoginInfoToBook } from "../../components/LoginInfoToBook/LoginInfoToBook";
import { useSessionContext } from "../../context/SessionProvider";
import { Box } from "@mui/material";
import { styles } from "./BookingPage.styles";
import { useTourContext } from "../../context/TourContext";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const BookingPage = () => {
  const { session } = useSessionContext()
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1300));

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
    <Box sx={styles(isMobile).bookingPageContainer} id='booking-page'>

      <Box sx={styles(isMobile).datePickerContainer}>
        <Box component="img" sx={styles(isMobile).flexDeskLogo} src="/assets/images/flexDeskLogo.jpeg" alt="Flex Desk Logo" />
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
              sx={styles(isMobile).dataPicker}
            />
          </div>
        </LocalizationProvider>
      </Box>
      <Box sx={styles(isMobile).spaceviewerContainer}>
        {selectedDate ? <SpaceViewer selectedDate={selectedDate.toString()} /> : null}
      </Box>
    </Box>
  );
};
export default BookingPage


