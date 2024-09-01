import { Box, Grid, Typography } from "@mui/material";
import { PricingCard } from "../PricingCard/PricingCard";
import { styles } from "./ExamplePricing.styles";
import { Link } from "react-router-dom";
import { pricingPlans } from "./ExamplePricing.constants";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ROUTES } from "../../routes";


export const ExamplePricing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1400));

  return (
    <Box sx={styles(isMobile).examplePricingContainer}>
      <Typography sx={styles(isMobile).examplePricingTitle}>Check one of our plans</Typography>
      <Grid container spacing={3} sx={styles(isMobile).examplePricingPlansBox}>
        {pricingPlans.map((pricingPlan, index) => (
          <Grid item xs={12} sm={12} md={4} key={index}>
            <Link to={ROUTES.pricing} style={{ textDecoration: 'none', color: 'inherit' }}>
              <PricingCard
                title={pricingPlan.title}
                text={pricingPlan.text}
                imageSrc={pricingPlan.imageSrc}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
      <Box sx={styles(isMobile).morePlansButton}>
        <Link to={ROUTES.pricing} style={{ textDecoration: 'none', color: 'inherit' }}>Check more plans</Link>
      </Box>
    </Box >
  );
};
