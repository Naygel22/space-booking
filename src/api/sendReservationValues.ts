import { supabaseClient } from "../supabaseClient";

type SendReservationValuesPayload = {
  date: string
  furnitureId: string
}

export const sendReservationValues = async ({ date, furnitureId }: SendReservationValuesPayload) => {
  const { error } = await supabaseClient
    .from('reservations')
    .insert([
      {
        date: date,
        furnitureId: furnitureId,
      },
    ]);

  if (error) {
    console.error('Error inserting reservation:', error);
    return false;
  }
  return true;
};
