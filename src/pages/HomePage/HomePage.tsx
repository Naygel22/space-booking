import { Box, Typography, useMediaQuery } from '@mui/material';
import * as styles from './HomePage.styles';
import { Advantages } from '../../components/Advantages/Advantages';
import { Link } from 'react-router-dom';
import { ExamplePricing } from '../../components/ExamplePricing/ExamplePricing';
import { Footer } from '../../components/Footer/Footer';
import { Faq } from '../../components/Faq/Faq';
import { useTheme } from '@mui/material/styles';
import { ROUTES } from '../../routes';

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1300));

  return (
    <Box sx={styles.homepageContainer}>
      <Box sx={styles.headingContainer(isMobile)}>
        <Box component="img" src="/assets/images/flexDeskLogo.jpeg" alt="Flex Desk Logo" sx={styles.logo} />
        <Typography sx={styles.headingText(isMobile)}>Your Premier Co-Working Destination</Typography>
        <Typography variant="h6" sx={styles.subheadingText(isMobile)}>
          Discover a dynamic workspace designed to inspire productivity and foster collaboration. At FlexDesk, we provide
          flexible solutions tailored to your professional needs, ensuring you have the perfect environment to thrive.
        </Typography>
        <Box sx={styles.bookYourDeskNowButton(isMobile)}>
          <Link to={ROUTES.booking} style={{ textDecoration: 'none', color: 'inherit' }}>Book your desk now!</Link>
        </Box>
      </Box>
      <Advantages />
      <ExamplePricing />
      <Faq />
      <Footer />
    </Box>
  );
};
export default HomePage
