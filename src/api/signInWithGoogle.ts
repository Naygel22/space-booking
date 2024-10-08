import { NotificationContextProps } from "../context/NotificationContext"
import { supabaseClient } from "../supabaseClient"

export async function signInWithGoogle(notify: NotificationContextProps['notify']) {
  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: 'google',
  })
  if (error) {
    notify("Login failed", "error")
  }
}