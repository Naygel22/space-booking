import { Grid, Typography, Box } from "@mui/material";
import { AdvantageCard } from "../AdvantageCard/AdvantageCard";
import { styles } from "./Advantages.styles";
import { advantages } from "./Advantages.constants";


export const Advantages = () => {
  return (
    <Box sx={styles.advantagesPageContainer}>
      <Typography variant="h4" sx={styles.advantagesTitle}>Why choose us?</Typography>
      <Grid container spacing={2} sx={styles.advantagesCards}>
        {advantages.map((advantage, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <AdvantageCard text={advantage.text} imageSrc={advantage.imgSource} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
