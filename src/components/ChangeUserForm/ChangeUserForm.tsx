import { Box, Button } from "@mui/material"
import { useFormik } from "formik"
import { changeUserData, ChangeUserEmailProps } from "../../api/changeUserData"
import { ChangeUserFormValues, yupChangeUserSchema } from "../../validators/validators"
import { TextInput } from "../TextInput"
import { useMutation } from "@tanstack/react-query"
import { useQueryClient } from "@tanstack/react-query"
import { styles } from "./ChangeUserForm.styles"

type ChangeUserFormProps = {
  initialUserFormValues: ChangeUserFormValues
}


export const ChangeUserForm = ({ initialUserFormValues }: ChangeUserFormProps) => {

  const queryClient = useQueryClient();

  const formik = useFormik<ChangeUserFormValues>({
    initialValues: initialUserFormValues,
    onSubmit: (values) => {
      mutate({ ...values, oldEmail: initialUserFormValues.mail })
    },
    validationSchema: yupChangeUserSchema
  })

  const { mutate } = useMutation({
    mutationFn: async (data: ChangeUserEmailProps) => changeUserData(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userName"] });
      console.log("success")
    },
    onError: () => {
      console.log("Something went wrong");

    },
  })

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={styles.formContainer}>
      <Box sx={styles.textFieldBar}>
        <TextInput formik={formik} accessor="name" label="Name" />
        <TextInput formik={formik} accessor="surname" label="Surname" />
      </Box>
      <Box sx={styles.textFieldBar}>
        <TextInput formik={formik} accessor="mail" label="E-mail" />
        <TextInput formik={formik} accessor="phonenumber" label="Phone" />
      </Box>
      <Box sx={styles.buttonContainer}>
        <Button type="submit" sx={styles.saveChangesButton}>Save changes</Button>
      </Box>
    </Box>
  )
}
