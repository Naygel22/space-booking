import { DeskType } from "../components/ManageReservations/ManageReservations.types";
import { supabaseClient } from "../supabaseClient"

export const getAllDesks = async (): Promise<DeskType[]> => {
  const { data: furnitures, error } = await supabaseClient
    .from('furnitures')
    .select('*')

    if (error) {
      throw new Error(error.message); 
    }

  return furnitures;
}
