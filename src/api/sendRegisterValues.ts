import { supabaseClient } from "../supabaseClient"
import { RegisterFormValues } from "../validators/validators"


export const sendRegisterValues = async (newRegister: RegisterFormValues) => {
  const { data, error } = await supabaseClient.auth.signUp({
    email: newRegister.mail,
    password: newRegister.password
  })
  if (error) {
    return false;
  }



}
