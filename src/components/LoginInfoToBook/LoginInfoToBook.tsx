import { Box, Grid, Typography } from "@mui/material";
import { styles } from "./LoginInfoToBook.styles";
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ROUTES } from "../../routes";

export const LoginInfoToBook = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1200));

  return (
    <Box sx={styles(isMobile).container}>
      <Grid container>
        <Grid item xs={12} md={6} sx={styles(isMobile).imageContainer}>
          <Box component="img" sx={styles(isMobile).loginAccessImg} src="/assets/images/loginBeforeAccess.jpeg" />
        </Grid>
        <Grid item xs={12} md={6} sx={styles(isMobile).textContainer}>
          <Typography variant="h6" sx={styles(isMobile).title}>
            Please Log In to book your desk
          </Typography>
          <Typography sx={styles(isMobile).description}>
            You need to be logged in to book a desk. Please log in or register to gain access to the booking desks feature.
          </Typography>
          <Link to={ROUTES.login} style={{ textDecoration: 'none' }}>
            <Box sx={styles(isMobile).accessLoginButton}>
              LOG IN
            </Box>
          </Link>
        </Grid>

      </Grid>
    </Box>
  );
};
