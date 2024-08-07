import { Box, Grid, Typography } from "@mui/material";
import { PricingCard } from "../PricingCard/PricingCard";
import { styles } from "./ExamplePricing.styles";
import { Link } from "react-router-dom";
import { pricingPlans } from "./ExamplePricing.constants";



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
