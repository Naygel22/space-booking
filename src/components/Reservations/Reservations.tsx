import { useMutation, useQuery } from "@tanstack/react-query";
import { getReservationsForUser } from "../../api/getReservationsForUser";
import { useSessionContext } from "../../context/SessionProvider";
import { Box, Button, Grid, Pagination, Typography } from "@mui/material";
import { styles } from "./Reservations.styles";
import { deleteReservationById } from "../../api/deleteReservationById";
import { isAfter, parseISO, isToday } from 'date-fns';
import { getAllDesks } from "../../api/getAllDesks";
import { useNotificationContext } from "../../context/NotificationContext";
import { useState } from "react";
import { ModalOnCancel } from "../ModalOnCancel/ModalOnCancel";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { QUERY_KEYS } from "../../api/constants";

const ITEMS_PER_PAGE = 10;


const Reservations = () => {
  const { session } = useSessionContext();
  const { notify } = useNotificationContext()
  const [currentPage, setCurrentPage] = useState(1);
  const [reservationToCancel, setReservationToCancel] = useState<string | null>(null)

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1100));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down(600));

  const { data: reservations, isLoading, error, refetch } = useQuery({
    queryKey: [QUERY_KEYS.reservations.get, session?.user.id],
    queryFn: () => getReservationsForUser(session?.user.id),
  });

  const { data: desks, isLoading: loadingDesks, error: errorDesks } = useQuery({
    queryKey: [QUERY_KEYS.desks.getAll],
    queryFn: getAllDesks,
  });

  const mutation = useMutation({
    mutationFn: async (reservationId: string) => deleteReservationById(reservationId),
    onSuccess: () => {
      refetch();
      notify('Your reservation has been canceled', "success")
      setReservationToCancel(null)
    },
    onError: () => {
      console.log("Something went wrong");
      notify('Error canceling reservation', "error");
    },
  });

  const handleDelete = (reservationId: string) => {
    mutation.mutate(reservationId);
  };

  const handleOpenModal = (reservationId: string) => {
    setReservationToCancel(reservationId)
  }

  const handleCloseModal = () => {
    setReservationToCancel(null)
  }


  if (isLoading || loadingDesks) return <div>Loading...</div>;
  if (error) return <div>Error loading reservations</div>;
  if (errorDesks) return <div>Error loading desks</div>;

  // Function to check if date is today or future
  const isFutureReservation = (date: string) => {
    const reservationDate = parseISO(date);
    const today = new Date();
    return isAfter(reservationDate, today) || isToday(reservationDate);
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedReservations = reservations?.slice().reverse().slice(startIndex, endIndex);

  return (
    <Box sx={styles(isMobile).container} id='reservations'>
      <Grid container sx={styles(isMobile).header}>
        <Grid item xs={3} sx={styles(isMobile).cell}>
          <Typography variant="h6" sx={styles(isMobile, isSmallMobile).headerText}>Reservation ID</Typography>
        </Grid>
        <Grid item xs={3} sx={styles(isMobile).cell}>
          <Typography variant="h6" sx={styles(isMobile, isSmallMobile).headerText}>Date</Typography>
        </Grid>
        <Grid item xs={3} sx={styles(isMobile).cell}>
          <Typography variant="h6" sx={styles(isMobile, isSmallMobile).headerText}>Desk Name</Typography>
        </Grid>
        <Grid item xs={3} sx={styles(isMobile).cell}>
          <Typography variant="h6" sx={styles(isMobile, isSmallMobile).headerText}>Status</Typography>
        </Grid>
      </Grid>
      <Box >
        {paginatedReservations?.map((reservation) => {
          console.log(reservation)
          const desk = desks?.find(desk => desk.furnitureId === reservation.furnitureId);
          return (
            <Grid container key={reservation.reservationId} sx={styles(isMobile).row}>
              <Grid item xs={3} sx={styles(isMobile).cell}>
                <Typography sx={styles(isMobile, isSmallMobile).cellText}>{reservation.reservationId.slice(-5)}</Typography>
              </Grid>
              <Grid item xs={3} sx={styles(isMobile).cell}>
                <Typography sx={styles(isMobile, isSmallMobile).cellText}>{reservation.date}</Typography>
              </Grid>
              <Grid item xs={3} sx={styles(isMobile).cell}>
                <Typography sx={styles(isMobile, isSmallMobile).cellText}>{desk ? desk.name : "Unknown Desk"}</Typography>
              </Grid>
              <Grid item xs={3} sx={styles(isMobile).cell} id='status-button'>
                {isFutureReservation(reservation.date) ? (
                  <Button onClick={() => handleOpenModal(reservation.reservationId)} sx={styles(isMobile).cancelButton}>Cancel</Button>
                ) : (
                  <Typography sx={styles(isMobile, isSmallMobile).statusCompleted}>Completed</Typography>
                )}
              </Grid>
            </Grid>
          );
        })}
      </Box>
      <Box sx={styles(isMobile).paginationBox}>
        <Pagination
          count={Math.ceil((reservations?.length || 0) / ITEMS_PER_PAGE)}
          page={currentPage}
          onChange={handlePageChange}
          sx={styles(isMobile).pagination}
        />
      </Box>
      {reservationToCancel &&
        <ModalOnCancel open={!!reservationToCancel} onConfirm={() => handleDelete(reservationToCancel)} onClose={handleCloseModal} />}
    </Box>
  );
};
export default Reservations