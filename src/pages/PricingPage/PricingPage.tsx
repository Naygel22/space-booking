import { useState } from "react";
import { Box, Grid, Typography, FormControlLabel, Switch } from "@mui/material";
import { PricingCard } from "../../components/PricingCard/PricingCard";
import * as styles from "./PricingPage.styles";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    title: "Day Pass",
    text: "The perfect solution for those who only need a desk for one day.",
    imageSrc: "/assets/images/dayPassDesk.jpeg",
    standardPrice: 10,
    premiumPrice: 15,
  },
  {
    title: "Weekly Pass",
    text: "An excellent choice for people who need space to work throughout the week. You get access to the desk for seven days in a row.",
    imageSrc: "/assets/images/weeklyPassDesk.jpeg",
    standardPrice: 100,
    premiumPrice: 125,
  },
  {
    title: "10-Day Pass",
    text: "A flexible solution for those who need a desk for a few days a month. Choose any 10 days that suit you best.",
    imageSrc: "/assets/images/10dayPassDesk.jpeg",
    standardPrice: 150,
    premiumPrice: 175,
  },
  {
    title: "Monthly Pass",
    text: "The best option for regular users. You get access to the desk for the whole month, without restrictions.",
    imageSrc: "/assets/images/monthlyPassDesk.jpeg",
    standardPrice: 300,
    premiumPrice: 350,
  },
];

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