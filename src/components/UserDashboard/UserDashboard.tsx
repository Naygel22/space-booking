import { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { Reservations } from '../Reservations/Reservations';
import { styles } from './UserDashboard.styles';
import { UserProfile } from '../UserProfile';
import { BsCalendar2CheckFill, BsCalendar2Date, BsFillPersonFill } from 'react-icons/bs';
import { ReservationsCalendar } from '../ReservationsCalendar';
import { useQuery } from '@tanstack/react-query';
import { getReservationsForUser } from '../../api/getReservationsForUser';
import { useSessionContext } from '../SessionProvider';

export const UserDashboard = () => {
  const { session } = useSessionContext();
  const [selectedTab, setSelectedTab] = useState('profile');

  const { data: reservations, isLoading, error } = useQuery({
    queryKey: ['userReservations', session?.user.id],
    queryFn: () => getReservationsForUser(session?.user.id),
  });
  reservations?.map((reservation) => {
    console.log(reservation?.date)
  })


  const events = reservations?.map((reservation) => ({
    title: 'Reservation',
    start: new Date(reservation.date),
    end: new Date(reservation.date),
    allDay: true,
  })) || [];


  return (
    <Box sx={styles.container}>
      <Grid container>
        <Grid item xs={3} sx={styles.sidebar}>
          <Box component='img' sx={styles.flexDeskLogo} src="/assets/images/flexDeskLogo.jpeg" />
          <Button
            sx={{ ...(selectedTab === 'profile' ? styles.buttonSelected : styles.button) }}
            onClick={() => setSelectedTab('profile')}
          >
            <BsFillPersonFill style={{ marginRight: '15px', fontSize: '17px' }} />
            My Profile
          </Button>
          <Button
            sx={{ ...(selectedTab === 'reservations' ? styles.buttonSelected : styles.button) }}
            onClick={() => setSelectedTab('reservations')}
          >
            <BsCalendar2CheckFill style={{ marginRight: '15px', fontSize: '17px' }} />
            My Reservations
          </Button>
          <Button
            sx={{ ...(selectedTab === 'calendar' ? styles.buttonSelected : styles.button) }}
            onClick={() => setSelectedTab('calendar')}
          >
            <BsCalendar2Date style={{ marginRight: '15px', fontSize: '17px' }} />
            Calendar
          </Button>
        </Grid>
        <Grid item xs={9} sx={styles.content}>
          {selectedTab === 'profile' && <UserProfile />}
          {selectedTab === 'reservations' && <Reservations />}
          <Box sx={{ marginTop: '30px' }}>
            {selectedTab === 'calendar' && <ReservationsCalendar events={events} />}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
