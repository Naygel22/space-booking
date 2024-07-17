import { supabaseClient } from "../supabaseClient";
import { ChangeUserFormValues } from "../validators/validators";

export type ChangeUserEmailProps = ChangeUserFormValues & {oldEmail: string}

export const changeUserData = async ({ mail, name, surname, phonenumber, oldEmail }: ChangeUserEmailProps) => {
  const { error: errorInAuth } = await supabaseClient.auth.updateUser({
    email: mail,
  })
  if (!errorInAuth) {
    const { error :errorInPublic } = await supabaseClient
    .from('users')
    .update({ mail, name, surname, phonenumber })
    .eq('mail', oldEmail)

    if(!errorInPublic){
      return true;
    }
  }
  return false
}