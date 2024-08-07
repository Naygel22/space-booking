import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { styles } from "./PricingCard.styles";
import { PricingPlan } from "./PricingCard.types";


export const PricingCard = ({ title, text, imageSrc, price }: PricingPlan) => {
  return (
    <Card sx={styles.pricingCardContainer}>
      <CardMedia component="img" image={imageSrc} alt="Advantage Image" sx={styles.pricingCardImg} />
      <CardContent sx={styles.pricingCardContent}>
        <Typography sx={styles.pricingCardTitle}>{title}</Typography>
        <Typography sx={styles.pricingCardText}>{text}</Typography>
        {price && <Typography sx={styles.pricingCardPrice}>Price: ${price}</Typography>}
      </CardContent>
    </Card>
  );
};
