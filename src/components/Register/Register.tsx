import { useFormik } from "formik";
import { TextInput } from "../TextInput";
import { RegisterFormValues, yupRegisterSchema } from "../../validators/validators";
import { sendRegisterValues } from "../../api/sendRegisterValues";
import { Grid, Box, Button, Container } from "@mui/material";
import { styles } from "./Register.styles";

type RegisterProps = {
  onStepChange: () => void;
};

const initialRegisterFormValues: RegisterFormValues = {
  name: "",
  surname: "",
  mail: "",
  phonenumber: "",
  password: "",
  repeatPassword: ""
};

export const Register = ({ onStepChange }: RegisterProps) => {
  const formik = useFormik<RegisterFormValues>({
    initialValues: initialRegisterFormValues,
    onSubmit: (values) => sendRegisterValues(values),
    validationSchema: yupRegisterSchema
  });

  return (
    <Container sx={styles.registerContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box component="img" sx={styles.registerImg} src="src/assets/images/registerSecondForm.jpeg" />
        </Grid>
        <Grid item xs={12} md={6} sx={styles.registerFormSide}>
          <Box component="img" sx={styles.flexDeskLogo} src="src/assets/images/flexDeskLogo.jpeg" />
          <form onSubmit={formik.handleSubmit}>
            <TextInput formik={formik} accessor="name" label="Name" />
            <TextInput formik={formik} accessor="surname" label="Surname" />
            <TextInput formik={formik} accessor="mail" label="E-mail" />
            <TextInput formik={formik} accessor="phonenumber" label="Phone" />
            <TextInput formik={formik} accessor="password" label="Password" type="password" />
            <TextInput formik={formik} accessor="repeatPassword" label="Confirm password" type="password" />
            <Button type="submit">Register</Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};
