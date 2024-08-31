import { useFormik } from "formik";
import { TextInput } from "../TextInput";
import { RegisterFormValues, yupRegisterSchema } from "../../validators/validators";
import { sendRegisterValues } from "../../api/sendRegisterValues";
import { Grid, Box, Button } from "@mui/material";
import { styles } from "./Register.styles";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useNotificationContext } from "../../context/NotificationContext";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(600));

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
    <Box sx={styles(isMobile).registerContainer}>
      <Grid container>
        <Grid item xs={12} md={6} sx={styles(isMobile).imageContainer}>
          <Box component="img" sx={styles(isMobile).registerImg} src="/assets/images/registerSecondForm.jpeg" />
        </Grid>
        <Grid item xs={12} md={6} sx={styles(isMobile).registerFormSide}>
          <Box sx={styles(isMobile).buttonContainer}>
            <Button sx={styles(isMobile).goBackButton} onClick={onStepChange}><FaArrowLeft style={styles(isMobile).leftArrowIcon as React.CSSProperties} /></Button>
          </Box>
          <Box component="img" sx={styles(isMobile).flexDeskLogo} src="/assets/images/flexDeskLogo.jpeg" />
          <Box component="form" onSubmit={formik.handleSubmit} sx={styles(isMobile).registerForm}>
            <Box sx={styles(isMobile).textFieldBar}>
              <TextInput formik={formik} accessor="name" label="Name" />
              <TextInput formik={formik} accessor="surname" label="Surname" />
            </Box>
            <Box sx={styles(isMobile).textFieldBar}>
              <TextInput formik={formik} accessor="mail" label="E-mail" />
              <TextInput formik={formik} accessor="phonenumber" label="Phone" />
            </Box>
            <Box sx={styles(isMobile).textFieldBar}>
              <TextInput formik={formik} accessor="password" label="Password" type="password" />
              <TextInput formik={formik} accessor="repeatPassword" label="Confirm password" type="password" />
            </Box>
            <Button type="submit" sx={styles(isMobile).registerButton}>Register</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
