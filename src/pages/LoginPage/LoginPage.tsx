import { Box } from "@mui/material"
import { Login } from "../../components/Login/Login"
import * as styles from "./LoginPage.styles"

export const LoginPage = () => {
  return (
    <Box sx={styles.login}>
      <Login />
    </Box>
  )
}
