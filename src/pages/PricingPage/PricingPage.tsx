import { useState } from "react";
import { Box, Grid, Typography, FormControlLabel, Switch } from "@mui/material";
import { PricingCard } from "../../components/PricingCard/PricingCard";
import * as styles from "./PricingPage.styles";
import { Link } from "react-router-dom";
import { pricingPlans } from "./PricingPage.constants";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const PricingPage = () => {
  const [isPremium, setIsPremium] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1400));

  return (
    <Box sx={styles.pricingPageContainer(isMobile)}>
      <Typography variant="h4" sx={styles.pricingPageTitle}>
        Check one of our plans
      </Typography>
      <FormControlLabel
        control={<Switch checked={isPremium} onChange={() => setIsPremium(!isPremium)} />}
        label={isPremium ? "Premium Prices" : "Standard Prices"}
        sx={{ marginBottom: '20px', color: 'white' }}
      />
      <Grid container spacing={3} sx={styles.pricingCardsGrid}>
        {pricingPlans.map((plan, index) => (
          <Grid item xs={12} sm={12} md={6} lg={3} key={index}>
            <PricingCard
              title={plan.title}
              text={plan.text}
              imageSrc={plan.imageSrc}
              price={isPremium ? plan.premiumPrice : plan.standardPrice}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={styles.contactUsButton(isMobile)}>
        <Link to='/contact' style={{ textDecoration: 'none', color: 'inherit' }}>
          Contact us to pick your plan
        </Link>
      </Box>
    </Box>
  );
};
export default PricingPage