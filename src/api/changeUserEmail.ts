import { supabaseClient } from "../supabaseClient";

type ChangeUserEmailProps = { email: string }

export const changeUserEmail = async ({ email }: ChangeUserEmailProps) => {
  const { data, error } = await supabaseClient.auth.updateUser({
    email: email,
  })
  if (error) {
    return false;
  }
  return data
}