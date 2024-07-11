import { Box, Button, Divider, Typography } from "@mui/material"
import { styles } from "./RegisterFirstForm.styles"
import { Link } from "react-router-dom"

type RegisterFirstFormProps = {
  onStepChange: () => void;
}

export const RegisterFirstForm = ({ onStepChange }: RegisterFirstFormProps) => {
  return (
    <Box sx={styles.registerFirstForm}>
      <Link to="/login" style={styles.loginButton as React.CSSProperties}>Log In</Link>
      <Typography variant="h1" sx={styles.title}>Create your FlexDesk account</Typography>
      <Box component='img' sx={styles.registerFirstFormImg} src="/assets/images/registerFirstForm.jpeg" />
      <Button type="submit" sx={styles.signupButton} onClick={onStepChange}>Sign up</Button>
      <Divider sx={styles.divider}>OR</Divider>

      <Button type="button" sx={styles.continueWithGoogleButton}
        startIcon={<Box component='img' sx={styles.googleLogo} src="/assets/images/googleLogo.png" />
        }>
        Continue with Google
      </Button>

      <Button type="button" sx={styles.continueWithGithubButton}
        startIcon={<Box component="img" src="/assets/images/github-mark-white.svg" sx={styles.githubLogo} />
        }>
        Continue with GitHub
      </Button>
    </Box>
  )
}
