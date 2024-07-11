import { Box, Grid, Typography } from "@mui/material";
import { styles } from "./LoginInfoToBook.styles";
import { Link } from "react-router-dom";

export const LoginInfoToBook = () => {
  return (
    <Box sx={styles.container}>
      <Grid container>
        <Grid item xs={12} md={6} sx={styles.imageContainer}>
          <Box component="img" sx={styles.loginAccessImg} src="/assets/images/loginBeforeAccess.jpeg" />
        </Grid>
        <Grid item xs={12} md={6} sx={styles.textContainer}>
          <Typography variant="h6" sx={styles.title}>
            Please Log In to book your desk
          </Typography>
          <Typography sx={styles.description}>
            You need to be logged in to book a desk. Please log in or register to gain access to the booking desks feature.
          </Typography>
          <Link to='/login' style={{ textDecoration: 'none' }}>
            <Box sx={styles.accessLoginButton}>
              LOG IN
            </Box>
          </Link>
        </Grid>

      </Grid>
    </Box>
  );
};
