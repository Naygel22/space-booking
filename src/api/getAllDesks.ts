import { supabaseClient } from "../supabaseClient"

export const getAllDesks = async () => {
  const { data: furnitures, error } = await supabaseClient
    .from('furnitures')
    .select('*')

  if (error) {
    return
  }

  return furnitures;
}
