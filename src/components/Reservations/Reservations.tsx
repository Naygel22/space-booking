import { useMutation, useQuery } from "@tanstack/react-query";
import { getReservationsForUser } from "../../api/getReservationsForUser";
import { useSessionContext } from "../SessionProvider";
import { Box, Button, Grid, Typography } from "@mui/material";
import { styles } from "./Reservations.styles";
import { deleteReservationById } from "../../api/deleteReservationById";
import { isAfter, parseISO, isToday } from 'date-fns';
import { getAllDesks } from "../../api/getAllDesks";
import { useNotificationContext } from "../../NotificationContext";

export const Reservations = () => {
  const { session } = useSessionContext();
  const { notify } = useNotificationContext()

  const { data: reservations, isLoading, error, refetch } = useQuery({
    queryKey: ['userReservations', session?.user.id],
    queryFn: () => getReservationsForUser(session?.user.id),
  });

  const { data: desks, isLoading: loadingDesks, error: errorDesks } = useQuery({
    queryKey: ['desks'],
    queryFn: getAllDesks,
  });

  const mutation = useMutation({
    mutationFn: async (reservationId: string) => deleteReservationById(reservationId),
    onSuccess: () => {
      refetch();
    },
    onError: () => {
      console.log("Something went wrong");
    },
  });

  const handleDelete = (reservationId: string) => {
    mutation.mutate(reservationId);
    notify('Your reservation has been canceled', "success")
  };

  if (isLoading || loadingDesks) return <div>Loading...</div>;
  if (error) return <div>Error loading reservations</div>;
  if (errorDesks) return <div>Error loading desks</div>;

  // Function to check if date is today or future
  const isFutureReservation = (date: string) => {
    const reservationDate = parseISO(date);
    const today = new Date();
    return isAfter(reservationDate, today) || isToday(reservationDate);
  };

  return (
    <Box sx={styles.container}>
      <Grid container sx={styles.header}>
        <Grid item xs={3} sx={styles.cell}>
          <Typography variant="h6" sx={styles.headerText}>Reservation ID</Typography>
        </Grid>
        <Grid item xs={3} sx={styles.cell}>
          <Typography variant="h6" sx={styles.headerText}>Date</Typography>
        </Grid>
        <Grid item xs={3} sx={styles.cell}>
          <Typography variant="h6" sx={styles.headerText}>Desk Name</Typography>
        </Grid>
        <Grid item xs={3} sx={styles.cell}>
          <Typography variant="h6" sx={styles.headerText}>Status</Typography>
        </Grid>
      </Grid>
      {reservations?.map((reservation) => {
        const desk = desks?.find(desk => desk.furnitureId === reservation.furnitureId);
        return (
          <Grid container key={reservation.reservationId} sx={styles.row}>
            <Grid item xs={3} sx={styles.cell}>
              <Typography>{reservation.reservationId.slice(-5)}</Typography>
            </Grid>
            <Grid item xs={3} sx={styles.cell}>
              <Typography>{reservation.date}</Typography>
            </Grid>
            <Grid item xs={3} sx={styles.cell}>
              <Typography>{desk ? desk.name : "Unknown Desk"}</Typography>
            </Grid>
            <Grid item xs={3} sx={styles.cell}>
              {isFutureReservation(reservation.date) ? (
                <Button onClick={() => handleDelete(reservation.reservationId)} sx={styles.cancelButton}>Cancel</Button>
              ) : (
                <Typography sx={styles.statusCompleted}>Completed</Typography>
              )}
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};
