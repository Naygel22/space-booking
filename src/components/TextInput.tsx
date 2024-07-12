import TextField from '@mui/material/TextField';
import { FormikProps } from 'formik';

export const TextInput = <FormValues,>({ formik, accessor, label, type = 'text', multiline = false, rows = 1 }: {
  formik: FormikProps<FormValues>,
  accessor: keyof FormValues & string,
  label: string,
  type?: string,
  multiline?: boolean,
  rows?: number,
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
      multiline={multiline}
      rows={rows}
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
          '& textarea': {
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
};
