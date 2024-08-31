import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { Facebook, Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import { styles } from "./Footer.styles";

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
            <Link href="/" color="inherit" sx={styles.footerLink}>
              Home
            </Link>
            <Link href="/booking" color="inherit" sx={styles.footerLink}>
              Booking
            </Link>
            <Link href="/pricing" color="inherit" sx={styles.footerLink}>
              Pricing
            </Link>
            <Link href="/contact" color="inherit" sx={styles.footerLink}>
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={styles.footerHeader}>
              Follow Us
            </Typography>
            <Box sx={styles.footerIcons}>
              <Link href="https://pl.linkedin.com/in/piotr-koz%C5%82owski-165539218" color="inherit">
                <LinkedIn />
              </Link>
              <Link href="https://github.com/Naygel22" color="inherit">
                <GitHub />
              </Link>
              <Link href="https://facebook.com" color="inherit">
                <Facebook />
              </Link>
              <Link href="https://instagram.com" color="inherit">
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
