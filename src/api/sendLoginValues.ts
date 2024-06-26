import { supabaseClient } from "../supabaseClient";
import { LoginFormValues } from "../validators/validators";


export const sendLoginValues = async (newLogin: LoginFormValues) => {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: newLogin.mail,
    password: newLogin.password
  })
  if (error) {
    return false;
  }
  return data
}