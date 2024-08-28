import { useSessionContext } from "../../context/SessionProvider";
import { Avatar, Box, Typography, Paper, Button, Grid } from "@mui/material";
import { styles } from "./UserProfile.styles";
import { ChangeUserForm } from "../ChangeUserForm/ChangeUserForm";
import { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa6";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const UserProfile = () => {
  const { userData: data } = useSessionContext();
  const [clickedToEdit, setClickedToEdit] = useState(false)

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1200));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down(900));

  if (!data || data.length === 0) {
    return <div>No user data available</div>;
  }

  return (
    <Box sx={styles(isMobile).container}>
      <Paper sx={styles(isMobile).paperArea}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={styles(isMobile).avatar}>
            {data[0].name[0]}
          </Avatar>
          <Box sx={styles(isMobile).nameAndSurname} id='edit-button'>
            <Typography variant="body1" align="center" sx={styles(isMobile).titleUserName}>{data[0].name}</Typography>
            <Typography variant="body1" align="center" sx={styles(isMobile).titleUserSurname}>{data[0].surname}</Typography>
            {!clickedToEdit && <Button onClick={() => setClickedToEdit(true)} sx={styles(isMobile).pencilButton} id="edit-button-click"><BsFillPencilFill style={styles(isMobile).pencilIcon as React.CSSProperties} /></Button>}
          </Box>

          {clickedToEdit &&
            <>
              <Button onClick={() => setClickedToEdit(false)} sx={styles(isMobile).goBackButton} id="go-back-button"><FaArrowLeft style={styles(isMobile).leftArrowIcon as React.CSSProperties} /></Button>
              <ChangeUserForm initialUserFormValues={{
                name: data[0].name,
                surname: data[0].surname,
                phonenumber: data[0].phonenumber ?? '',
                mail: data[0].mail ?? '',
              }} />
            </>
          }
          {!clickedToEdit &&
            <Box marginTop={8} width="100%">
              <Grid container spacing={2} justifyContent="center" color='white' >
                <Grid item xs={12} sm={isMobile ? 12 : 6} >
                  <Typography variant="subtitle2" align="center" sx={styles(isMobile, isSmallMobile).dataTitle}>Name</Typography>
                  <Typography variant="body1" align="center" sx={styles(isMobile, isSmallMobile).dataValue}>{data[0].name}</Typography>
                </Grid>
                <Grid item xs={12} sm={isMobile ? 12 : 6}>
                  <Typography variant="subtitle2" align="center" sx={styles(isMobile, isSmallMobile).dataTitle}>Surname</Typography>
                  <Typography variant="body1" align="center" sx={styles(isMobile, isSmallMobile).dataValue}>{data[0].surname}</Typography>
                </Grid>
                <Grid item xs={12} sm={isMobile ? 12 : 6}>
                  <Typography variant="subtitle2" align="center" sx={styles(isMobile, isSmallMobile).dataTitle}>Email</Typography>
                  <Typography variant="body1" align="center" sx={styles(isMobile, isSmallMobile).dataValue}>{data[0].mail}</Typography>
                </Grid>
                <Grid item xs={12} sm={isMobile ? 12 : 6}>
                  <Typography variant="subtitle2" align="center" sx={styles(isMobile, isSmallMobile).dataTitle}>Phone number</Typography>
                  <Typography variant="body1" align="center" sx={styles(isMobile, isSmallMobile).dataValue}>{data[0].phonenumber}</Typography>
                </Grid>
              </Grid>
            </Box>
          }
        </Box>
      </Paper>
    </Box>
  );
};
