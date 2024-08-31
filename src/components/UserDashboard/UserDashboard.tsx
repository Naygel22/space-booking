import { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import Reservations from '../Reservations/Reservations';
import { styles } from './UserDashboard.styles';
import { UserProfile } from '../UserProfile/UserProfile';
import { BsCalendar2CheckFill, BsCalendar2Date, BsFillGearFill, BsFillMegaphoneFill, BsFillPersonFill, BsThermometerHalf } from 'react-icons/bs';
import { ReservationsCalendar } from '../ReservationsCalendar';
import { useQuery } from '@tanstack/react-query';
import { getReservationsForUser } from '../../api/getReservationsForUser';
import { useSessionContext } from '../../context/SessionProvider'
import { SoundIntensityChart } from '../SoundIntensityChart/SoundIntensityChart';
import { TemperatureChart } from '../../TemperatureChart/TemperatureChart';
import { ManageReservations } from '../ManageReservations/ManageReservations';
import { useTourContext } from '../../context/TourContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const tabs = ["profile", "reservations", "calendar", "sound", "temperature", "management"] as const;
type PossibleTabs = typeof tabs[number]

const UserDashboard = () => {
  const { session, userData } = useSessionContext();
  const [selectedTab, setSelectedTab] = useState<PossibleTabs>('profile');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1400));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down(900));

  const { data: reservations } = useQuery({
    queryKey: ['userReservations', session?.user.id],
    queryFn: () => getReservationsForUser(session?.user.id),
  });

  const events = reservations?.map((reservation) => ({
    title: 'Reservation',
    start: new Date(reservation.date),
    end: new Date(reservation.date),
    allDay: true,
  })) || [];

  const {
    setState,
    state: { stepIndex },
  } = useTourContext();

  useEffect(() => {
    if (stepIndex === 6) {
      setState({ run: true, stepIndex: 6 })
    }
  }, [])

  if (!userData) {
    return <Typography>No data available</Typography>;
  }
  return (
    <Box sx={styles(isMobile).container} id='user-dashboard'>
      <Grid container>
        <Grid item xs={3} sx={styles(isMobile).sidebar}>
          <Box component='img' sx={styles(isMobile).flexDeskLogo} src="/assets/images/flexDeskLogo.jpeg" />
          <Button
            id='profile-button'
            sx={{ ...(selectedTab === 'profile' ? styles(isMobile, isSmallMobile).buttonSelected : styles(isMobile, isSmallMobile).button) }}
            onClick={() => setSelectedTab('profile')}
          >
            <BsFillPersonFill style={{ marginRight: isSmallMobile ? '0' : '15px', fontSize: '17px' }} />
            {!isSmallMobile && 'My Profile'}
          </Button>
          <Button
            id='reservations-button'
            sx={{ ...(selectedTab === 'reservations' ? styles(isMobile, isSmallMobile).buttonSelected : styles(isMobile, isSmallMobile).button) }}
            onClick={() => setSelectedTab('reservations')}
          >
            <BsCalendar2CheckFill style={{ marginRight: isSmallMobile ? '0' : '15px', fontSize: '17px' }} />
            {!isSmallMobile && 'My Reservations'}
          </Button>
          <Button
            id='calendar-button'
            sx={{ ...(selectedTab === 'calendar' ? styles(isMobile, isSmallMobile).buttonSelected : styles(isMobile, isSmallMobile).button) }}
            onClick={() => setSelectedTab('calendar')}
          >
            <BsCalendar2Date style={{ marginRight: isSmallMobile ? '0' : '15px', fontSize: '17px' }} />
            {!isSmallMobile && 'Calendar'}
          </Button>
          {userData[0].role === 'admin' &&
            <>
              <Button
                sx={{ ...(selectedTab === 'sound' ? styles(isMobile, isSmallMobile).buttonSelected : styles(isMobile, isSmallMobile).button) }}
                onClick={() => setSelectedTab('sound')}
              >
                <BsFillMegaphoneFill style={{ marginRight: isSmallMobile ? '0' : '15px', fontSize: '17px' }} />
                {!isSmallMobile && 'Sound intensity'}
              </Button>
              <Button
                sx={{ ...(selectedTab === 'temperature' ? styles(isMobile, isSmallMobile).buttonSelected : styles(isMobile, isSmallMobile).button) }}
                onClick={() => setSelectedTab('temperature')}
              >
                <BsThermometerHalf style={{ marginRight: isSmallMobile ? '0' : '15px', fontSize: '17px' }} />
                {!isSmallMobile && 'Temperature in the office'}
              </Button>
              <Button
                sx={{ ...(selectedTab === 'management' ? styles(isMobile, isSmallMobile).buttonSelected : styles(isMobile, isSmallMobile).button) }}
                onClick={() => setSelectedTab('management')}
              >
                <BsFillGearFill style={{ marginRight: isSmallMobile ? '0' : '15px', fontSize: '17px' }} />
                {!isSmallMobile && 'Manage reservations'}
              </Button>
            </>
          }
        </Grid>
        <Grid item xs={9} sx={styles(isMobile).content}>
          {selectedTab === 'profile' && <UserProfile />}
          {selectedTab === 'reservations' && <Reservations />}
          <Box sx={{ marginTop: '30px' }}>
            {selectedTab === 'calendar' && <ReservationsCalendar events={events} />}
          </Box>
          {selectedTab === 'sound' && <SoundIntensityChart />}
          {selectedTab === 'temperature' && <TemperatureChart />}
          {selectedTab === 'management' && <ManageReservations />}
        </Grid>
      </Grid>
    </Box>
  );
};
export default UserDashboard