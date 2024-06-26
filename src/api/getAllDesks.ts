import { supabaseClient } from "../supabaseClient"

export const getAllDesks = async () => {
  const { data: furnitures, error } = await supabaseClient
    .from('furnitures')
    .select('*')
  // const response = await fetch('http://localhost:3000/desks')
  // if (!response.ok) {
  //   return
  // }
  if (error) {
    return
  }
  //const data = await response.json()
  return furnitures;
}
