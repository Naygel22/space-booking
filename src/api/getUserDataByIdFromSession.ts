import { Session } from "@supabase/supabase-js";
import { supabaseClient } from "../supabaseClient"
import { UserType } from "../components/SessionProvider";

export const getUserDataByIdFromSession = async (session: Session | null): Promise<UserType[]> => {
  if (!session) {
    return []
  }

  const { data: users, error } = await supabaseClient
    .from('users')
    .select('name, surname, mail, phonenumber, role')
    .eq('userId', session?.user.id);

  if (error) {
    console.error("Error fetching user name:", error);
    return []
  }

  return users;
}
