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
      sx={{
        '& label.Mui-focused': {
          color: '#7d7c7a',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',
          },
          '& input': {
            color: 'white',
            backgroundColor: '#3c3a38',
          },
          backgroundColor: '#3c3a38',
        },
        '& .MuiFormHelperText-root': {
          color: 'white',
        },
      }}
      InputLabelProps={{
        style: { color: 'white' },
      }}
    />
  );
}
