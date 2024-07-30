import { Box, Button } from "@mui/material"
import { useFormik } from "formik"
import { changeUserData, ChangeUserEmailProps } from "../../api/changeUserData"
import { ChangeUserFormValues, yupChangeUserSchema } from "../../validators/validators"
import { TextInput } from "../TextInput"
import { useMutation } from "@tanstack/react-query"
import { styles } from "./ChangeUserForm.styles"
import { useNotificationContext } from "../../context/NotificationContext"
import { useSessionContext } from "../../context/SessionProvider"

type ChangeUserFormProps = {
  initialUserFormValues: ChangeUserFormValues
}


export const ChangeUserForm = ({ initialUserFormValues }: ChangeUserFormProps) => {
  const { notify } = useNotificationContext()
  const { session, getUserData } = useSessionContext()

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
      if (session) {
        getUserData(session)
        console.log("success")
      }
    },
    onError: () => {
      console.log("Something went wrong");

    },
  })

  function saveChanges() {
    notify("Changes saved", "success")
  }

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={styles.formContainer} id="change-user-form">
      <Box sx={styles.textFieldBar}>
        <TextInput formik={formik} accessor="name" label="Name" />
        <TextInput formik={formik} accessor="surname" label="Surname" />
      </Box>
      <Box sx={styles.textFieldBar}>
        <TextInput formik={formik} accessor="mail" label="E-mail" />
        <TextInput formik={formik} accessor="phonenumber" label="Phone" />
      </Box>
      <Box sx={styles.buttonContainer}>
        <Button type="submit" sx={styles.saveChangesButton} onClick={saveChanges}>Save changes</Button>
      </Box>
    </Box>
  )
}
