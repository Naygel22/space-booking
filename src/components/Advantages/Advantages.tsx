import { Grid, Typography, Box, useMediaQuery } from "@mui/material";
import { AdvantageCard } from "../AdvantageCard/AdvantageCard";
import { styles } from "./Advantages.styles";
import { advantages } from "./Advantages.constants";
import { useTheme } from '@mui/material/styles';

export const Advantages = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1300));

  return (
    <Box sx={styles(isMobile).advantagesPageContainer}>
      <Typography sx={styles(isMobile).advantagesTitle}>Why choose us?</Typography>
      <Grid container spacing={2} >
        {advantages.map((advantage, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <AdvantageCard text={advantage.text} imageSrc={advantage.imgSource} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
