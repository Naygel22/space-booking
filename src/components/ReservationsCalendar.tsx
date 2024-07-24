import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Box } from '@mui/material'

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})
type Event = {
  title: string,
  start: Date,
  end: Date,
  allDay?: boolean,
  resource?: any,
}
interface ReservationsCalendarProps {
  events: Event[];
}

export const ReservationsCalendar = ({ events }: ReservationsCalendarProps) => {

  return (
    <Box id='calendar'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
      />
    </Box>)
};