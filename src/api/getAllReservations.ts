import { ReservationType } from "../components/ManageReservations/ManageReservations.types";
import { supabaseClient } from "../supabaseClient"

export const getAllReservations = async (): Promise<ReservationType[]> => {
  const { data: reservations, error } = await supabaseClient
    .from('reservations')
    .select('*')

  if (error) {
    throw new Error(error.message); 
  }

  return reservations; 
}
