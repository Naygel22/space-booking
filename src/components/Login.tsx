import { useFormik } from "formik"
import { TextInput } from "./TextInput"
import { LoginFormValues, yupLoginSchema } from "../validators/validators"
import { sendLoginValues } from "../api/sendLoginValues"

const initialLoginFormValues = {
  mail: '',
  password: ''
}

export const Login = () => {
  const formik = useFormik<LoginFormValues>({
    initialValues: initialLoginFormValues,
    onSubmit: (values) => sendLoginValues(values),
    validationSchema: yupLoginSchema
  })

  return (
    <form onSubmit={formik.handleSubmit} className="loginForm">
      <TextInput formik={formik} accessor='mail' label='E-mail' />
      <TextInput formik={formik} accessor='password' label='Password' type='password' />
      <button type="submit" className="loginButton">Log In</button>
      <button type="button" className="loginWithGoogleButton">
        <img src="src/assets/images/googleLogo.png" className="googleLogo" />
        Log in with Google
      </button>
      <button type="button" className="loginWithGithubButton">
        <img src="src/assets/images/githubLogo.png" className="githubLogo" />
        Log in with GitHub
      </button>

      <div>
        <div className="signupButtonInLoginForm">New? Sign up and book your desk!</div>
      </div>
    </form>

  )
}
