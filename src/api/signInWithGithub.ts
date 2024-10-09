import { NotificationContextProps } from "../context/NotificationContext"
import { supabaseClient } from "../supabaseClient"

export async function signInWithGithub(notify: NotificationContextProps['notify']) {
  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'https://space-booking-seven.vercel.app/'
    }
  })
  if (error) {
    notify("Login failed", "error")
  }
}