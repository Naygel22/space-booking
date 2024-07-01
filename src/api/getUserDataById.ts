import { Session } from "@supabase/supabase-js";
import { supabaseClient } from "../supabaseClient"

export const getUserDataById = async (session: Session) => {
  const { data: users, error } = await supabaseClient
    .from('users')
    .select('name, surname, mail, phonenumber')
    .eq('userId', session.user.id);

  if (error) {
    console.error("Error fetching user name:", error);
    return
  }

  return users;
}
