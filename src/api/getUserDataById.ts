import { supabaseClient } from "../supabaseClient"

export const getUserDataById = async (userId: string) => {
  if (!userId) {
    return
  }

  const { data: users, error } = await supabaseClient
    .from('users')
    .select('name, surname, mail, phonenumber, role')
    .eq('userId', userId);

  if (error) {
    console.error("Error fetching user data:", error);
    return
  }

  return users;
}
