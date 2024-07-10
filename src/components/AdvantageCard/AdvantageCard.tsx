import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { styles } from "./AdvantageCard.styles";

type AdvantageCardProps = {
  text: string,
  imageSrc: string
};

export const AdvantageCard = ({ text, imageSrc }: AdvantageCardProps) => {
  return (
    <Card sx={styles.cardContainer}>
      <CardMedia component="img" image={imageSrc} alt="Advantage Image" sx={styles.advantageImg} />
      <CardContent>
        <Typography sx={styles.advantageText}>{text}</Typography>
      </CardContent>
    </Card>
  );
};
