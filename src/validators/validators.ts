import * as yup from 'yup'

export const BASE_VALIDATORS = {
  mailValidator: yup
    .string()
    .email('Invalid email format')
    .required('Email is required')
}

export const yupRegisterSchema = yup.object({
  name: yup.string().required('Name is required'),
  surname: yup.string().required('Name is required'),
  mail: BASE_VALIDATORS.mailValidator,
  phonenumber: yup
    .string()
    .matches(/^\+\d{11}$/, "Phone number must start with '+'")
    .required('Phone number is required'),
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
  password: yup.string().required()
})

export type LoginFormValues = yup.InferType<typeof yupLoginSchema>