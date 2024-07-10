import { useMutation, useQuery } from "@tanstack/react-query";
import { getReservationsForUser } from "../../api/getReservationsForUser";
import { useSessionContext } from "../SessionProvider";
import { Box, Button, Grid, Typography } from "@mui/material";
import { styles } from "./Reservations.styles";
import { deleteReservationById } from "../../api/deleteReservationById";
import { isAfter, parseISO, isToday } from 'date-fns';

export const Reservations = () => {
  const { session } = useSessionContext();

  const { data: reservations, isLoading, error, refetch } = useQuery({
    queryKey: ['userReservations', session?.user.id],
    queryFn: () => getReservationsForUser(session?.user.id),
  });

  const mutation = useMutation({
    mutationFn: async (reservationId: string) => { return await deleteReservationById(reservationId) },
    onSuccess: () => {
      refetch()
    },
    onError: () => {
      console.log("Something went wrong");
    }
  });

  const handleDelete = (reservationId: string) => {
    mutation.mutate(reservationId);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading reservations</div>;

  // Function to check if date is today or future
  const isFutureReservation = (date: string) => {
    const reservationDate = parseISO(date);
    const today = new Date();
    return isAfter(reservationDate, today) || isToday(reservationDate);
  };

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
          <Grid item xs={4} sx={styles.cell}>
            {isFutureReservation(reservation.date) && (
              <Button onClick={() => handleDelete(reservation.reservationId)}>Cancel</Button>
            )}
            {!isFutureReservation(reservation.date) && (
              <Typography>Completed</Typography>
            )}
          </Grid>
        </Grid>

      ))}
    </Box>
  );
};
