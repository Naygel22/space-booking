import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { Facebook, Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import { styles } from "./Footer.styles";
import { ROUTES } from "../../routes";

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
            <Link href={ROUTES.home} color="inherit" sx={styles.footerLink}>
              Home
            </Link>
            <Link href={ROUTES.booking} color="inherit" sx={styles.footerLink}>
              Booking
            </Link>
            <Link href={ROUTES.pricing} color="inherit" sx={styles.footerLink}>
              Pricing
            </Link>
            <Link href={ROUTES.contact} color="inherit" sx={styles.footerLink}>
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={styles.footerHeader}>
              Follow Us
            </Typography>
            <Box sx={styles.footerIcons}>
              <Link href={ROUTES.linkedin} color="inherit">
                <LinkedIn />
              </Link>
              <Link href={ROUTES.github} color="inherit">
                <GitHub />
              </Link>
              <Link href={ROUTES.facebook} color="inherit">
                <Facebook />
              </Link>
              <Link href={ROUTES.instagram} color="inherit">
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
