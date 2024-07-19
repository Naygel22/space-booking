import { useFormik } from "formik"
import { TextInput } from "../TextInput"
import { LoginFormValues, yupLoginSchema } from "../../validators/validators"
import { sendLoginValues } from "../../api/sendLoginValues"
import { Link, useNavigate } from "react-router-dom"
import { Box, Button, Divider, Typography } from "@mui/material"
import { styles } from "./Login.styles"
import { useNotificationContext } from "../../NotificationContext"
import { useState } from "react"
import { useSessionContext } from "../SessionProvider"

const initialLoginFormValues = {
  mail: '',
  password: ''
}

export const Login = () => {
  const navigate = useNavigate()
  const { notify } = useNotificationContext()
  const { getUserData } = useSessionContext()
  const [loginError, setLoginError] = useState<string | null>(null)

  const formik = useFormik<LoginFormValues>({
    initialValues: initialLoginFormValues,
    onSubmit: (values) => {
      sendLoginValues(values)
        .then(response => {
          if (!response) {
            notify("Login failed", "error")
            setLoginError("Invalid email or password. Please try again.")
          }
          if (response) {
            setLoginError(null)
            navigate('/')
            getUserData(response.session)
            notify("You successfully logged in", "success")
          }
        })
    },
    validationSchema: yupLoginSchema
  })

  return (
    <>
      <Box sx={styles.logoAndLoginForm}>
        <Box component='img' sx={styles.flexDeskLogo} src="/assets/images/flexDeskLogo.jpeg" />
        <Box component="form" onSubmit={formik.handleSubmit} sx={styles.loginForm}>
          <TextInput formik={formik} accessor='mail' label='E-mail' />
          <TextInput formik={formik} accessor='password' label='Password' type='password' />
          <Typography sx={styles.loginError}>{loginError}</Typography>
          <Button type="submit" sx={styles.loginButton}>Log In</Button>
          <Divider sx={styles.divider}>OR</Divider>

          <Button type="button" sx={styles.loginWithGoogleButton}
            startIcon={<Box component='img' sx={styles.googleLogo} src="/assets/images/googleLogo.png" />
            }>
            Log in with Google
          </Button>

          <Button type="button" sx={styles.loginWithGithubButton}
            startIcon={<Box component="img" src="/assets/images/github-mark-white.svg" sx={styles.githubLogo} />
            }>
            Log in with GitHub
          </Button>
        </Box>
      </Box>

      <Box sx={styles.loginIsNew}>
        <Link to="/register" style={styles.signupButtonInLoginForm as React.CSSProperties}>New? Sign up and book your desk!</Link>
      </Box>
    </>

  )
}
