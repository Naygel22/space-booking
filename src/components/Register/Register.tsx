import { useFormik } from "formik";
import { TextInput } from "../TextInput";
import { RegisterFormValues, yupRegisterSchema } from "../../validators/validators";
import { sendRegisterValues } from "../../api/sendRegisterValues";
import { Grid, Box, Button } from "@mui/material";
import { styles } from "./Register.styles";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useNotificationContext } from "../../context/NotificationContext";

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
  const navigate = useNavigate()
  const { notify } = useNotificationContext()

  const formik = useFormik<RegisterFormValues>({
    initialValues: initialRegisterFormValues,
    onSubmit: (values) => {
      sendRegisterValues(values)
      navigate("/login");
      notify('You successfully registered', "success")
    },
    validationSchema: yupRegisterSchema
  });

  return (
    <Box sx={styles.registerContainer}>
      <Grid container>
        <Grid item xs={12} md={6} sx={styles.imageContainer}>
          <Box component="img" sx={styles.registerImg} src="/assets/images/registerSecondForm.jpeg" />
        </Grid>
        <Grid item xs={12} md={6} sx={styles.registerFormSide}>
          <Box sx={styles.buttonContainer}>
            <Button sx={styles.goBackButton} onClick={onStepChange}><FaArrowLeft style={styles.leftArrowIcon as React.CSSProperties} /></Button>
          </Box>
          <Box component="img" sx={styles.flexDeskLogo} src="/assets/images/flexDeskLogo.jpeg" />
          <Box component="form" onSubmit={formik.handleSubmit} sx={styles.registerForm}>
            <Box sx={styles.textFieldBar}>
              <TextInput formik={formik} accessor="name" label="Name" />
              <TextInput formik={formik} accessor="surname" label="Surname" />
            </Box>
            <Box sx={styles.textFieldBar}>
              <TextInput formik={formik} accessor="mail" label="E-mail" />
              <TextInput formik={formik} accessor="phonenumber" label="Phone" />
            </Box>
            <Box sx={styles.textFieldBar}>
              <TextInput formik={formik} accessor="password" label="Password" type="password" />
              <TextInput formik={formik} accessor="repeatPassword" label="Confirm password" type="password" />
            </Box>
            <Button type="submit" sx={styles.registerButton}>Register</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
