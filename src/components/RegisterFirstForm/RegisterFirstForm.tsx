import { Box, Button, Divider, Typography } from "@mui/material"
import { styles } from "./RegisterFirstForm.styles"
import { Link } from "react-router-dom"
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

type RegisterFirstFormProps = {
  onStepChange: () => void;
}

export const RegisterFirstForm = ({ onStepChange }: RegisterFirstFormProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(650));

  return (
    <Box sx={styles(isMobile).registerFirstForm}>
      <Link to="/login" style={styles(isMobile).loginButton as React.CSSProperties}>Log In</Link>
      <Typography variant="h1" sx={styles(isMobile).title}>Create your FlexDesk account</Typography>
      <Box component='img' sx={styles(isMobile).registerFirstFormImg} src="/assets/images/registerFirstForm.jpeg" />
      <Button type="submit" sx={styles(isMobile).signupButton} onClick={onStepChange}>Sign up</Button>
      <Divider sx={styles(isMobile).divider}>OR</Divider>

      <Button type="button" sx={styles(isMobile).continueWithGoogleButton}
        startIcon={<Box component='img' sx={styles(isMobile).googleLogo} src="/assets/images/googleLogo.png" />
        }>
        Continue with Google
      </Button>

      <Button type="button" sx={styles(isMobile).continueWithGithubButton}
        startIcon={<Box component="img" src="/assets/images/github-mark-white.svg" sx={styles(isMobile).githubLogo} />
        }>
        Continue with GitHub
      </Button>
    </Box>
  )
}
