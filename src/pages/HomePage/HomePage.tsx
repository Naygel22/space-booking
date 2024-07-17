import { Box, Typography } from '@mui/material';
import * as styles from './HomePage.styles';
import { Advantages } from '../../components/Advantages/Advantages';
import { Link } from 'react-router-dom';
import { ExamplePricing } from '../../components/ExamplePricing/ExamplePricing';
import { Footer } from '../../components/Footer/Footer';
import { Faq } from '../../components/Faq/Faq';

export const HomePage = () => {
  return (
    <Box sx={styles.homepageContainer}>
      <Box sx={styles.headingContainer}>
        <Box component="img" src="/assets/images/flexDeskLogo.jpeg" alt="Flex Desk Logo" sx={styles.logo} />
        <Typography variant="h4" sx={styles.headingText}>Your Premier Co-Working Destination</Typography>
        <Typography variant="h6" sx={styles.subheadingText}>
          Discover a dynamic workspace designed to inspire productivity and foster collaboration. At FlexDesk, we provide
          flexible solutions tailored to your professional needs, ensuring you have the perfect environment to thrive.
        </Typography>
        <Box sx={styles.bookYourDeskNowButton}>
          <Link to='/booking' style={{ textDecoration: 'none', color: 'inherit' }}>Book your desk now!</Link>
        </Box>
      </Box>
      <Advantages />
      <ExamplePricing />
      <Faq />
      <Footer />
    </Box>
  );
};
