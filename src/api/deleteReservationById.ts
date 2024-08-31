import { supabaseClient } from "../supabaseClient"

export const deleteReservationById = async (reservationId: string) => {
  const { error } = await supabaseClient
    .from('reservations')
    .delete()
    .eq('reservationId', reservationId)
  if (error) {
    return
  }


}
