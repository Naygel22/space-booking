import { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Reservations } from '../Reservations/Reservations';
import { styles } from './UserDashboard.styles';
import { UserProfile } from '../UserProfile/UserProfile';
import { BsCalendar2CheckFill, BsCalendar2Date, BsFillMegaphoneFill, BsFillPeopleFill, BsFillPersonFill, BsThermometerHalf } from 'react-icons/bs';
import { ReservationsCalendar } from '../ReservationsCalendar';
import { useQuery } from '@tanstack/react-query';
import { getReservationsForUser } from '../../api/getReservationsForUser';
import { useSessionContext } from '../SessionProvider';
import { getUserDataById } from '../../api/getUserDataById';
import { SoundIntensityChart } from '../SoundIntensityChart/SoundIntensityChart';
import { TemperatureChart } from '../../TemperatureChart/TemperatureChart';

export const UserDashboard = () => {
  const { session } = useSessionContext();
  const [selectedTab, setSelectedTab] = useState('profile');

  const { data: reservations } = useQuery({
    queryKey: ['userReservations', session?.user.id],
    queryFn: () => getReservationsForUser(session?.user.id),
  });

  const { data: userData } = useQuery({
    queryKey: ['userName'],
    queryFn: () => getUserDataById(session),
    enabled: !!session,
  });

  const events = reservations?.map((reservation) => ({
    title: 'Reservation',
    start: new Date(reservation.date),
    end: new Date(reservation.date),
    allDay: true,
  })) || [];

  if (!userData) {
    return <Typography>No data available</Typography>;
  }

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
          {userData[0].role === 'admin' &&
            <>
              <Button
                sx={{ ...(selectedTab === 'sound' ? styles.buttonSelected : styles.button) }}
                onClick={() => setSelectedTab('sound')}
              >
                <BsFillMegaphoneFill style={{ marginRight: '15px', fontSize: '17px' }} />
                Sound intensity
              </Button>
              <Button
                sx={{ ...(selectedTab === 'temperature' ? styles.buttonSelected : styles.button) }}
                onClick={() => setSelectedTab('temperature')}
              >
                <BsThermometerHalf style={{ marginRight: '15px', fontSize: '17px' }} />
                Temperature in the office
              </Button>
              <Button
                sx={{ ...(selectedTab === 'occupancy' ? styles.buttonSelected : styles.button) }}
                onClick={() => setSelectedTab('occupancy')}
              >
                <BsFillPeopleFill style={{ marginRight: '15px', fontSize: '17px' }} />
                People occupancy
              </Button>
            </>
          }
        </Grid>
        <Grid item xs={9} sx={styles.content}>
          {selectedTab === 'profile' && <UserProfile />}
          {selectedTab === 'reservations' && <Reservations />}
          <Box sx={{ marginTop: '30px' }}>
            {selectedTab === 'calendar' && <ReservationsCalendar events={events} />}
          </Box>
          {selectedTab === 'sound' && <SoundIntensityChart />}
          {selectedTab === 'temperature' && <TemperatureChart />}
        </Grid>
      </Grid>
    </Box>
  );
};
