import { Box, Grid, Typography } from "@mui/material";
import { PricingCard, PricingPlan } from "../PricingCard/PricingCard";
import { styles } from "./ExamplePricing.styles";
import { Link } from "react-router-dom";

const pricingPlans: PricingPlan[] = [
  {
    title: "Premium Single Desk",
    text: "Optimize your productivity in our exclusive office space. The Premium Single Desk plan provides access to an ergonomic desk, a comfortable chair and high-speed Internet. An ideal solution for those who value privacy and concentration.",
    imageSrc: "src/assets/images/smallAreaDesks.jpeg",
    price: 15,
  },
  {
    title: "Standard Shared Desk",
    text: "Share office space and reduce costs with our Standard Shared Desk plan. We provide access to spacious desks, ergonomic chairs and full office infrastructure. Perfect for freelancers and small teams who value flexibility and collaboration",
    imageSrc: "src/assets/images/bigAreaDesks.jpeg",
    price: 10,
  },
  {
    title: "Individual need?",
    text: "Contact us and we will try to figure it out!",
    imageSrc: "src/assets/images/individualNeed.jpeg",
  },
];

export const ExamplePricing = () => {
  return (
    <Box sx={styles.examplePricingContainer}>
      <Typography variant="h4" sx={styles.examplePricingTitle}>Check one of our plans</Typography>
      <Grid container spacing={3} style={{ paddingLeft: '300px', paddingRight: '300px', width: '100%' }}>
        {pricingPlans.map((pricingPlan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link to="/pricing" style={{ textDecoration: 'none', color: 'inherit' }}>
              <PricingCard
                title={pricingPlan.title}
                text={pricingPlan.text}
                imageSrc={pricingPlan.imageSrc}
                price={pricingPlan.price}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
      <Box sx={styles.morePlansButton}>
        <Link to='/pricing' style={{ textDecoration: 'none', color: 'inherit' }}>Check more plans</Link>
      </Box>
    </Box >
  );
};
