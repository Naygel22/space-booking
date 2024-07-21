import { Session } from "@supabase/supabase-js";
import { supabaseClient } from "../supabaseClient"

export const getUserDataByIdFromSession = async (session: Session | null) => {
  if (!session) {
    return
  }

  const { data: users, error } = await supabaseClient
    .from('users')
    .select('name, surname, mail, phonenumber, role')
    .eq('userId', session?.user.id);

  if (error) {
    console.error("Error fetching user name:", error);
    return
  }

  return users;
}
