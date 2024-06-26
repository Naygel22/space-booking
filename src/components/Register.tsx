import { useFormik } from "formik"
import { TextInput } from "./TextInput"
import { RegisterFormValues, yupRegisterSchema } from "../validators/validators"
import { sendRegisterValues } from "../api/sendRegisterValues"


const initialRegisterFormValues: RegisterFormValues = {
  name: '',
  surname: '',
  mail: '',
  phonenumber: '',
  password: '',
  repeatPassword: ''
}


export const Register = () => {
  const formik = useFormik<RegisterFormValues>({
    initialValues: initialRegisterFormValues,
    onSubmit: (values) => sendRegisterValues(values),
    validationSchema: yupRegisterSchema
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextInput formik={formik} accessor='name' label='Name' />
      <TextInput formik={formik} accessor='surname' label='Surname' />
      <TextInput formik={formik} accessor='mail' label='E-mail' />
      <TextInput formik={formik} accessor='phonenumber' label='Phone' />
      <TextInput formik={formik} accessor='password' label='Password' type='password' />
      <TextInput formik={formik} accessor='repeatPassword' label='Confirm password' type='password' />
      <button type="submit">Register</button>
    </form>
  )
}
