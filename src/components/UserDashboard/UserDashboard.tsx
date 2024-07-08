import { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { Reservations } from '../Reservations/Reservations';
import { styles } from './UserDashboard.styles';
import { UserProfile } from '../UserProfile';
import { BsCalendar2CheckFill, BsCalendar2Date, BsFillPersonFill } from 'react-icons/bs';

export const UserDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('profile');


  return (
    <Box sx={styles.container}>
      <Grid container>
        <Grid item xs={3} sx={styles.sidebar}>
          <Box component='img' sx={styles.flexDeskLogo} src="src/assets/images/flexDeskLogo.jpeg" />
          <Button
            sx={{ ...styles.button, ...(selectedTab === 'profile' && styles.buttonSelected) }}
            onClick={() => setSelectedTab('profile')}
          >
            <BsFillPersonFill style={{ marginRight: '15px', fontSize: '17px' }} />
            My Profile
          </Button>
          <Button
            sx={{ ...styles.button, ...(selectedTab === 'reservations' && styles.buttonSelected) }}
            onClick={() => setSelectedTab('reservations')}
          >
            <BsCalendar2CheckFill style={{ marginRight: '15px', fontSize: '17px' }} />
            My Reservations
          </Button>
          <Button
            sx={{ ...styles.button, ...(selectedTab === 'calendar' && styles.buttonSelected) }}
            onClick={() => setSelectedTab('calendar')}
          >
            <BsCalendar2Date style={{ marginRight: '15px', fontSize: '17px' }} />
            Calendar
          </Button>
        </Grid>
        <Grid item xs={9} sx={styles.content}>
          {selectedTab === 'profile' && <UserProfile />}
          {selectedTab === 'reservations' && <Reservations />}
        </Grid>
      </Grid>
    </Box>
  );
};
