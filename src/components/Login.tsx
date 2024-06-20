import { useFormik } from "formik"
import { TextInput } from "./TextInput"
import { LoginFormValues, yupLoginSchema } from "../validators/validators"

const initialLoginFormValues = {
  mail: '',
  password: ''
}

export const Login = () => {
  const formik = useFormik<LoginFormValues>({
    initialValues: initialLoginFormValues,
    onSubmit: (values) => console.log(values),
    validationSchema: yupLoginSchema
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextInput formik={formik} accessor='mail' label='E-mail' />
      <TextInput formik={formik} accessor='password' label='Password' type='password' />
      <button type="submit">Send</button>
    </form>
  )
}
