import { supabaseClient } from "../supabaseClient"

export const getAllReservations = async () => {
  const { data: reservations, error } = await supabaseClient
    .from('reservations')
    .select('*')

  if (error) {
    return
  }

  return reservations;
}
