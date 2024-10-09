import { Box, Container, Grid, Typography } from "@mui/material";
import { Facebook, Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import { styles } from "./Footer.styles";
import { ROUTES } from "../../routes";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentDateYear = new Date().getFullYear()
  return (
    <Box sx={styles.footerContainer}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={styles.footerHeader}>
              Contact Us
            </Typography>
            <Typography variant="body2">1234 Street Name</Typography>
            <Typography variant="body2">Białystok</Typography>
            <Typography variant="body2">Phone: 694 037 596</Typography>
            <Typography variant="body2">Email: piotrkozlowski14@gmail.com</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={styles.footerHeader}>
              Quick Links
            </Typography>
            <Box sx={styles.footerLink}><Link to={ROUTES.home} >
              Home
            </Link></Box>
            <Box sx={styles.footerLink}> <Link to={ROUTES.booking}  >
              Booking
            </Link></Box>
            <Box sx={styles.footerLink}>
              <Link to={ROUTES.pricing}  >
                Pricing
              </Link>
            </Box>
            <Box sx={styles.footerLink}>
              <Link to={ROUTES.contact}>
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={styles.footerHeader}>
              Follow Us
            </Typography>
            <Box sx={styles.footerIcons}>
              <Link to={ROUTES.linkedin} color="inherit">
                <LinkedIn />
              </Link>
              <Link to={ROUTES.github} color="inherit">
                <GitHub />
              </Link>
              <Link to={ROUTES.facebook} color="inherit">
                <Facebook />
              </Link>
              <Link to={ROUTES.instagram} color="inherit">
                <Instagram />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box sx={styles.footerCopyRight}>
          <Typography variant="body2">
            © {currentDateYear} FlexDesk. All rights reserved. Made by Piotr Kozłowski
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
