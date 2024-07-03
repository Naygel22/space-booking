import { useFormik } from "formik"
import { TextInput } from "./TextInput"
import { LoginFormValues, yupLoginSchema } from "../validators/validators"
import { sendLoginValues } from "../api/sendLoginValues"
import { Link, useNavigate } from "react-router-dom"
import { Divider } from "@mui/material"

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
      <div className="logoAndLoginForm">
        <img className="flexDeskLogo" src="src/assets/images/flexDeskLogo.jpeg" />
        <form onSubmit={formik.handleSubmit} className="loginForm">
          <TextInput formik={formik} accessor='mail' label='E-mail' />
          <TextInput formik={formik} accessor='password' label='Password' type='password' />
          <button type="submit" className="loginButton">Log In</button>
          <Divider
            sx={{
              fontSize: '13px',
              "&::before, &::after": {
                borderColor: "white",
              },
            }}>OR</Divider>
          <button type="button" className="loginWithGoogleButton">
            <img src="src/assets/images/googleLogo.png" className="googleLogo" />
            Log in with Google
          </button>
          <button type="button" className="loginWithGithubButton">
            <img src="src/assets/images/github-mark-white.svg" className="githubLogo" />
            Log in with GitHub
          </button>
        </form>
      </div>

      <div className="loginIsNew">
        <Link to="/register" className="signupButtonInLoginForm">New? Sign up and book your desk!</Link>
      </div>
    </>

  )
}
