import { useFormik } from "formik"
import { TextInput } from "../TextInput"
import { LoginFormValues, yupLoginSchema } from "../../validators/validators"
import { sendLoginValues } from "../../api/sendLoginValues"
import { Link, useNavigate } from "react-router-dom"
import { Box, Button, Divider } from "@mui/material"
import { styles } from "./Login.styles"

const initialLoginFormValues = {
  mail: '',
  password: ''
}

export const Login = () => {
  const navigate = useNavigate()

  const formik = useFormik<LoginFormValues>({
    initialValues: initialLoginFormValues,
    onSubmit: (values) => {
      sendLoginValues(values)
      navigate('/')
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
