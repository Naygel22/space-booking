import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { SpaceViewer } from "../components/SpaceViewer/SpaceViewer"
import { useState } from "react";
import { LoginInfoToBook } from "../components/LoginInfoToBook/LoginInfoToBook";
import { useSessionContext } from "../components/SessionProvider";


export const BookingPage = () => {
  const { session } = useSessionContext()

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  if (!session) {
    return <LoginInfoToBook />
  }

  return <>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker label="Basic date picker" disablePast views={['year', 'month', 'day']} value={selectedDate} onChange={handleDateChange} format="yyyy-MM-dd" />
    </LocalizationProvider>
    {selectedDate ? <SpaceViewer selectedDate={selectedDate.toString()} /> : null}
  </>
}
