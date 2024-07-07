import { supabaseClient } from "../supabaseClient"

export const getReservationsForUser = async (userId: string | undefined) => {
  const { data: reservations, error } = await supabaseClient
    .from('reservations')
    .select('*')
    .eq('userId', userId)
  if (error) {
    return
  }

  return reservations;
}
