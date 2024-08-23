import { useFormik } from "formik"
import { TextInput } from "../TextInput"
import { LoginFormValues, yupLoginSchema } from "../../validators/validators"
import { sendLoginValues } from "../../api/sendLoginValues"
import { Link, useNavigate } from "react-router-dom"
import { Box, Button, Divider, Typography } from "@mui/material"
import { styles } from "./Login.styles"
import { useNotificationContext } from "../../context/NotificationContext"
import { useState } from "react"
import { useSessionContext } from "../../context/SessionProvider"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const initialLoginFormValues = {
  mail: '',
  password: ''
}

export const Login = () => {
  const navigate = useNavigate()
  const { notify } = useNotificationContext()
  const { getUserData } = useSessionContext()
  const [loginError, setLoginError] = useState<string | null>(null)

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(900));

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
    <Box sx={styles(isMobile).loginContainer}>
      <Box sx={styles(isMobile).logoAndLoginForm}>
        <Box component='img' sx={styles(isMobile).flexDeskLogo} src="/assets/images/flexDeskLogo.jpeg" />
        <Box component="form" onSubmit={formik.handleSubmit} sx={styles(isMobile).loginForm}>
          <TextInput formik={formik} accessor='mail' label='E-mail' />
          <TextInput formik={formik} accessor='password' label='Password' type='password' />
          <Typography sx={styles(isMobile).loginError}>{loginError}</Typography>
          <Typography sx={styles(isMobile).testText}>Test Login: testuser@flexdesk.com</Typography>
          <Typography sx={styles(isMobile).testText}>Test Password: Test123@</Typography>
          <Button type="submit" sx={styles(isMobile).loginButton}>Log In</Button>
          <Divider sx={styles(isMobile).divider}>OR</Divider>

          <Button type="button" sx={styles(isMobile).loginWithGoogleButton}
            startIcon={<Box component='img' sx={styles(isMobile).googleLogo} src="/assets/images/googleLogo.png" />
            }>
            Log in with Google
          </Button>

          <Button type="button" sx={styles(isMobile).loginWithGithubButton}
            startIcon={<Box component="img" src="/assets/images/github-mark-white.svg" sx={styles(isMobile).githubLogo} />
            }>
            Log in with GitHub
          </Button>
        </Box>
      </Box>

      <Box sx={styles(isMobile).loginIsNew}>
        <Link to="/register" style={styles(isMobile).signupButtonInLoginForm as React.CSSProperties}>New? Sign up and book your desk!</Link>
      </Box>
    </Box>

  )
}
