import { useState } from "react";
import { Box, Grid, Typography, FormControlLabel, Switch } from "@mui/material";
import { PricingCard } from "../../components/PricingCard/PricingCard";
import * as styles from "./PricingPage.styles";
import { Link } from "react-router-dom";
import { pricingPlans } from "./PricingPage.constants";


const PricingPage = () => {
  const [isPremium, setIsPremium] = useState(false);

  return (
    <Box sx={styles.pricingPageContainer}>
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
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <PricingCard
              title={plan.title}
              text={plan.text}
              imageSrc={plan.imageSrc}
              price={isPremium ? plan.premiumPrice : plan.standardPrice}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={styles.contactUsButton}>
        <Link to='/contact' style={{ textDecoration: 'none', color: 'inherit' }}>
          Contact us to pick your plan
        </Link>
      </Box>
    </Box>
  );
};
export default PricingPage