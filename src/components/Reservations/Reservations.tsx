import { useQuery } from "@tanstack/react-query";
import { getReservationsForUser } from "../../api/getReservationsForUser";
import { useSessionContext } from "../SessionProvider";
import { Box, Grid, Typography } from "@mui/material";
import { styles } from "./Reservations.styles";

export const Reservations = () => {
  const { session } = useSessionContext();

  const { data: reservations, isLoading, error } = useQuery({
    queryKey: ['reservations'],
    queryFn: () => getReservationsForUser(session?.user.id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading reservations</div>;

  return (
    <Box sx={styles.container}>
      <Grid container sx={styles.header}>
        <Grid item xs={5} sx={styles.cell}>
          <Typography variant="h6" sx={styles.headerText}>Reservation ID</Typography>
        </Grid>
        <Grid item xs={2} sx={styles.cell}>
          <Typography variant="h6" sx={styles.headerText}>Date</Typography>
        </Grid>
        <Grid item xs={5} sx={styles.cell}>
          <Typography variant="h6" sx={styles.headerText}>Furniture ID</Typography>
        </Grid>
      </Grid>
      {reservations?.map((reservation) => (
        <Grid container key={reservation.reservationId} sx={styles.row}>
          <Grid item xs={5} sx={styles.cell}>
            <Typography>{reservation.reservationId}</Typography>
          </Grid>
          <Grid item xs={2} sx={styles.cell}>
            <Typography>{reservation.date}</Typography>
          </Grid>
          <Grid item xs={5} sx={styles.cell}>
            <Typography>{reservation.furnitureId}</Typography>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};
