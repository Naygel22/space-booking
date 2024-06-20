import TextField from '@mui/material/TextField';
import { FormikProps } from 'formik';

export const TextInput = <FormValues,>({ formik, accessor, label, type = 'text' }: {
  formik: FormikProps<FormValues>,
  accessor: keyof FormValues & string
  label: string,
  type?: string
}) => {
  return (
    <TextField
      error={Boolean(formik.touched[accessor] && formik.errors[accessor])}
      helperText={
        formik.touched[accessor] && formik.errors[accessor]
          ? (formik.errors[accessor] as string)
          : null
      }
      id={accessor}
      label={label}
      name={accessor}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[accessor]}
      type={type}
    />
  );
}
