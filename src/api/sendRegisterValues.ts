import { supabaseClient } from "../supabaseClient"
import { RegisterFormValues } from "../validators/validators"


export const sendRegisterValues = async (newRegister: RegisterFormValues) => {
  const { data, error } = await supabaseClient.auth.signUp({
    email: newRegister.mail,
    password: newRegister.password
  })
  if (data) {
    await supabaseClient
      .from('users')
      .insert([
        { userId: data.user?.id, name: newRegister.name, surname: newRegister.surname, mail: newRegister.mail, phonenumber: newRegister.phonenumber },
      ])
  }
  if (error) {
    return false;
  }



}
