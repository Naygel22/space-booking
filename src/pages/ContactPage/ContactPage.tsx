import { Box, Button, Typography } from "@mui/material";
import { BsEnvelopeFill, BsTelephoneFill } from "react-icons/bs";
import { styles } from "./ContactPage.styles";
import { TextInput } from "../../components/TextInput";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ContactFormValues, yupContactSchema } from "../../validators/validators";
import { useNotificationContext } from "../../context/NotificationContext";

const initialContactFormValues = {
  name: '',
  mail: '',
  phonenumber: '',
  message: ''
};

const ContactPage = () => {
  const navigate = useNavigate();
  const { notify } = useNotificationContext()

  const formik = useFormik<ContactFormValues>({
    initialValues: initialContactFormValues,
    onSubmit: () => {
      navigate('/');
      notify("Thank you for your message", "success")
    },
    validationSchema: yupContactSchema
  });

  return (
    <Box sx={styles.contactPageContainer}>
      <Box sx={styles.details}>
        <Typography sx={styles.title}>Contact with us</Typography>
        <Typography sx={styles.description}>Direct contact</Typography>
        <Typography sx={styles.contactDetail}>
          <BsEnvelopeFill style={{ marginRight: '8px' }} />
          piotrkozlowski14@gmail.com
        </Typography>
        <Typography sx={styles.contactDetail}>
          <BsTelephoneFill style={{ marginRight: '8px' }} />
          694037596
        </Typography>
      </Box>
      <Box component="form" onSubmit={formik.handleSubmit} sx={styles.contactFormContainer}>
        <TextInput formik={formik} accessor='name' label="Name" />
        <TextInput formik={formik} accessor="mail" label="E-mail" />
        <TextInput formik={formik} accessor="phonenumber" label="Phone" />
        <TextInput formik={formik} accessor="message" label="Message" multiline rows={7} />
        <Button type="submit" sx={styles.sendMessageButton}>Send a message</Button>
      </Box>
    </Box>
  );
};
export default ContactPage