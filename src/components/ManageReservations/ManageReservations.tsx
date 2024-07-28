import { useMutation, useQuery } from "@tanstack/react-query";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { deleteReservationById } from "../../api/deleteReservationById";
import { isAfter, parseISO, isToday } from 'date-fns';
import { getAllDesks } from "../../api/getAllDesks";
import { useNotificationContext } from "../../NotificationContext";
import { useState } from "react";
import { ModalOnCancel } from "../ModalOnCancel/ModalOnCancel";
import { getAllReservations } from "../../api/getAllReservations";
import { styles } from "./ManageReservations.styles";
import { DeskType, ReservationType } from "./ManageReservations.types";


export const ManageReservations = () => {
  const { notify } = useNotificationContext();
  const [reservationToCancel, setReservationToCancel] = useState<string | null>(null);

  const { data: reservations, isLoading, error, refetch } = useQuery<ReservationType[]>({
    queryKey: ['allReservations'],
    queryFn: getAllReservations,
  });

  const { data: desks, isLoading: loadingDesks, error: errorDesks } = useQuery<DeskType[]>({
    queryKey: ['desks'],
    queryFn: getAllDesks,
  });

  console.log(desks)
  console.log(reservations)

  const mutation = useMutation({
    mutationFn: async (reservationId: string) => deleteReservationById(reservationId),
    onSuccess: () => {
      refetch();
      notify('Your reservation has been canceled', "success");
      setReservationToCancel(null);
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
    setReservationToCancel(reservationId);
  };

  const handleCloseModal = () => {
    setReservationToCancel(null);
  };

  if (isLoading || loadingDesks) return <div>Loading...</div>;
  if (error) return <div>Error loading reservations</div>;
  if (errorDesks) return <div>Error loading desks</div>;

  const isFutureReservation = (date: string) => {
    const reservationDate = parseISO(date);
    const today = new Date();
    return isAfter(reservationDate, today) || isToday(reservationDate);
  };

  const columns: GridColDef[] = [
    {
      field: 'userId',
      headerName: 'User ID',
      headerAlign: 'center',
      width: 185,
      renderCell: (params) => (
        <Box sx={styles.cell}>
          {params.value}
        </Box>
      ),
    },
    {
      field: 'reservationId',
      headerName: 'Reservation ID',
      headerAlign: 'center',
      width: 185,
      renderCell: (params) => (
        <Box sx={styles.cell}>
          {params.value.slice(-5)}
        </Box>
      ),
    },
    {
      field: 'date',
      headerName: 'Date',
      headerAlign: 'center',
      width: 185,
      renderCell: (params) => (
        <Box sx={styles.cell}>
          {params.value}
        </Box>
      ),
    },
    {
      field: 'deskName',
      headerName: 'Desk Name',
      headerAlign: 'center',
      width: 185,
      renderCell: (params) => (
        <Box sx={styles.cell}>
          {params.value}
        </Box>
      ),
    },
    {
      field: 'status',
      headerName: 'Status',
      headerAlign: 'center',
      width: 185,
      renderCell: (params) => (
        <Box sx={styles.cell}>
          {params.value === 'ACTIVE' ? (
            <Button onClick={() => {
              console.log('Cancel button clicked for reservationId:', params.row.reservationId);
              handleOpenModal(params.row.reservationId);
            }} sx={styles.cancelButton}>
              Cancel
            </Button>
          ) : (
            <Typography sx={styles.statusCompleted}>Completed</Typography>
          )}
        </Box>
      ),
    },
  ];

  const getStatus = (date: string): "ACTIVE" | "COMPLETED" => {
    return isFutureReservation(date) ? "ACTIVE" : "COMPLETED"
  }

  const rows = reservations?.map((reservation) => {
    const desk = desks?.find(desk => desk.furnitureId === reservation.furnitureId);
    return {
      id: reservation.reservationId,
      userId: reservation.userId.slice(-5),
      reservationId: reservation.reservationId,
      date: reservation.date,
      deskName: desk ? desk.name : "Unknown Desk",
      status: getStatus(reservation.date)
    };
  }) || [];


  return (
    <Box sx={styles.container}>
      <DataGrid
        sx={{
          '& .MuiDataGrid-columnHeaders': {
            fontSize: '20px'
          },
          '& .MuiToolbar-root': {
            color: 'white'
          },
          '& .Mui-disabled .MuiSvgIcon-root': {
            color: 'gray'
          },
          '& .MuiDataGrid-cell': {
            color: 'white'
          },
        }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        autoHeight
      />
      {reservationToCancel && (
        <ModalOnCancel
          open={!!reservationToCancel}
          onConfirm={() => handleDelete(reservationToCancel)}
          onClose={handleCloseModal}
        />
      )}
    </Box>
  );
};
