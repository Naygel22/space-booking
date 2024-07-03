import { supabaseClient } from "../supabaseClient"

export const getReservationForDate = async (date: string) => {
  const { data: reservations, error } = await supabaseClient
    .from('reservations')
    .select('*')
    .eq('date', date)
  if (error) {
    return
  }

  return reservations;
}
