import { Box, Button, Typography } from "@mui/material";
import { BsEnvelopeFill, BsTelephoneFill } from "react-icons/bs";
import { styles } from "./ContactPage.styles";
import { TextInput } from "../../components/TextInput";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ContactFormValues, yupContactSchema } from "../../validators/validators";
import { useNotificationContext } from "../../context/NotificationContext";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const initialContactFormValues = {
  name: '',
  mail: '',
  phonenumber: '',
  message: ''
};

const ContactPage = () => {
  const navigate = useNavigate();
  const { notify } = useNotificationContext()

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(900));

  const formik = useFormik<ContactFormValues>({
    initialValues: initialContactFormValues,
    onSubmit: () => {
      navigate('/');
      notify("Thank you for your message", "success")
    },
    validationSchema: yupContactSchema
  });

  return (
    <Box sx={styles(isMobile).contactPageContainer}>
      <Box sx={styles(isMobile).details}>
        <Typography sx={styles(isMobile).title}>Contact with us</Typography>
        <Typography sx={styles(isMobile).description}>Direct contact</Typography>
        <Typography sx={styles(isMobile).contactDetail}>
          <BsEnvelopeFill style={{ marginRight: '8px' }} />
          piotrkozlowski14@gmail.com
        </Typography>
        <Typography sx={styles(isMobile).contactDetail}>
          <BsTelephoneFill style={{ marginRight: '8px' }} />
          694037596
        </Typography>
      </Box>
      <Box component="form" onSubmit={formik.handleSubmit} sx={styles(isMobile).contactFormContainer}>
        <TextInput formik={formik} accessor='name' label="Name" />
        <TextInput formik={formik} accessor="mail" label="E-mail" />
        <TextInput formik={formik} accessor="phonenumber" label="Phone" />
        <TextInput formik={formik} accessor="message" label="Message" multiline rows={7} />
        <Button type="submit" sx={styles(isMobile).sendMessageButton}>Send a message</Button>
      </Box>
    </Box>
  );
};
export default ContactPage