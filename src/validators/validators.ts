import * as yup from 'yup'

export const BASE_VALIDATORS = {
  mailValidator: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  nameValidator: yup
    .string()
    .required('Name is required'),
  surnameValidator: yup
    .string()
    .required('Surname is required'),
  phonenumber: yup
    .string()
    .test(
      'starts-with-plus',
      "Phone number must start with '+'",
      value => value?.startsWith('+') || false
    )
    .test(
      'correct-length',
      'Incorrect phone number',
      value => value ? value.length === 12 : false
    )

    .required('Phone number is required'),
}

export const yupRegisterSchema = yup.object({
  name: BASE_VALIDATORS.nameValidator,
  surname: BASE_VALIDATORS.surnameValidator,
  mail: BASE_VALIDATORS.mailValidator,
  phonenumber: BASE_VALIDATORS.phonenumber,
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[!@#$%^&*()_+\-={}[\]:;"'<>,.?/]/, 'Password must contain at least one special character'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Password confirmation is required')
})

export type RegisterFormValues = yup.InferType<typeof yupRegisterSchema>

export const yupLoginSchema = yup.object({
  mail: BASE_VALIDATORS.mailValidator,
  password: yup.string().required('Password is required')
})

export type LoginFormValues = yup.InferType<typeof yupLoginSchema>

export const yupContactSchema = yup.object({
  name: BASE_VALIDATORS.nameValidator,
  mail: BASE_VALIDATORS.mailValidator,
  phonenumber: BASE_VALIDATORS.phonenumber,
  message: yup.string().required('This field is required')
})

export type ContactFormValues = yup.InferType<typeof yupContactSchema>

export const yupChangeUserSchema= yup.object({
  name: BASE_VALIDATORS.nameValidator,
  surname: BASE_VALIDATORS.surnameValidator,
  mail: BASE_VALIDATORS.mailValidator,
  phonenumber: BASE_VALIDATORS.phonenumber
})

export type ChangeUserFormValues = yup.InferType<typeof yupChangeUserSchema>