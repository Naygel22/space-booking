import { Grid, Typography, Box } from "@mui/material";
import { AdvantageCard } from "../AdvantageCard/AdvantageCard";
import { styles } from "./Advantages.styles";

const advantages = [
  {
    text: "No contract required",
    imgSource: '/assets/images/contract.png'
  },
  {
    text: "Free cancellation",
    imgSource: '/assets/images/cancel.png'
  },
  {
    text: "Fast and unlimited wireless fiber optic internet",
    imgSource: '/assets/images/wifi.png'
  },
  {
    text: "Ergonomic, height-adjustable desks where you won't run out of space",
    imgSource: '/assets/images/workplace.png'
  },
  {
    text: 'Comfortable office chairs designed for long hours of work',
    imgSource: '/assets/images/gaming-chair.png'
  },
  {
    text: "Air conditioning",
    imgSource: '/assets/images/air-conditioner.png'
  },
  {
    text: "A modern common area with comfortable sofas and a TV",
    imgSource: '/assets/images/living-room.png'
  },
  {
    text: "Well-equipped kitchen",
    imgSource: '/assets/images/kitchen.png'
  },
  {
    text: "Elevator in the building and access for people with disabilities",
    imgSource: '/assets/images/elevator.png'
  },
]

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
