import { Box, Button, Divider, Typography } from "@mui/material"
import { styles } from "./RegisterFirstForm.styles"
import { Link } from "react-router-dom"
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { ROUTES } from "../../routes"
import { signInWithGithub } from "../../api/signInWithGithub"
import { useNotificationContext } from "../../context/NotificationContext"
import { signInWithGoogle } from "../../api/signInWithGoogle"

type RegisterFirstFormProps = {
  onStepChange: () => void;
}

export const RegisterFirstForm = ({ onStepChange }: RegisterFirstFormProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(650));
  const { notify } = useNotificationContext()

  return (
    <Box sx={styles(isMobile).registerFirstForm}>
      <Link to={ROUTES.login} style={styles(isMobile).loginButton as React.CSSProperties}>Log In</Link>
      <Typography variant="h1" sx={styles(isMobile).title}>Create your FlexDesk account</Typography>
      <Box component='img' sx={styles(isMobile).registerFirstFormImg} src="/assets/images/registerFirstForm.jpeg" />
      <Button type="submit" sx={styles(isMobile).signupButton} onClick={onStepChange}>Sign up</Button>
      <Divider sx={styles(isMobile).divider}>OR</Divider>

      <Button type="button" sx={styles(isMobile).continueWithGoogleButton}
        startIcon={<Box component='img' sx={styles(isMobile).googleLogo} src="/assets/images/googleLogo.png" />
        } onClick={() => signInWithGoogle(notify)}>
        Continue with Google
      </Button>

      <Button type="button" sx={styles(isMobile).continueWithGithubButton}
        startIcon={<Box component="img" src="/assets/images/github-mark-white.svg" sx={styles(isMobile).githubLogo} />
        } onClick={() => signInWithGithub(notify)}>
        Continue with GitHub
      </Button>
    </Box>
  )
}
