import { Box } from "@mui/material"
import { Login } from "../../components/Login/Login"
import * as styles from "./LoginPage.styles"

const LoginPage = () => {
  return (
    <Box sx={styles.login}>
      <Login />
    </Box>
  )
}
export default LoginPage
