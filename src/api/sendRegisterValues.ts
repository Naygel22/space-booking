import { supabaseClient } from "../supabaseClient"
import { RegisterFormValues } from "../validators/validators"

//If the user has been successfully created, we save additional information about him in our database. Although Supabase stores basic information like email and password in its Authentication service, we want to store additional user data (like name, surname, phone number, etc.) in our own database. Thanks to this, we have greater control over user data and can easily expand it with additional fields in the future.

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
