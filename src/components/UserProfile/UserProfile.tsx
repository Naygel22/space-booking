import { useSessionContext } from "../SessionProvider";
import { Avatar, Box, Typography, Paper, Button, Grid } from "@mui/material";
import { styles } from "./UserProfile.styles";
import { ChangeUserForm } from "../ChangeUserForm/ChangeUserForm";
import { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa6";

export const UserProfile = () => {
  const { userData: data } = useSessionContext();
  const [clickedToEdit, setClickedToEdit] = useState(false)

  if (!data || data.length === 0) {
    return <div>No user data available</div>;
  }

  return (
    <Box sx={styles.container}>
      <Paper sx={styles.paperArea}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={styles.avatar}>
            {data[0].name[0]}
          </Avatar>
          <Box sx={styles.nameAndSurname} id='edit-button'>
            <Typography variant="body1" align="center" sx={styles.titleUserName}>{data[0].name}</Typography>
            <Typography variant="body1" align="center" sx={styles.titleUserSurname}>{data[0].surname}</Typography>
            {!clickedToEdit && <Button onClick={() => setClickedToEdit(true)} sx={styles.pencilButton} id="edit-button-click"><BsFillPencilFill style={styles.pencilIcon as React.CSSProperties} /></Button>}
          </Box>

          {clickedToEdit &&
            <>
              <Button onClick={() => setClickedToEdit(false)} sx={styles.goBackButton} id="go-back-button"><FaArrowLeft style={styles.leftArrowIcon as React.CSSProperties} /></Button>
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
                <Grid item xs={12} sm={6} >
                  <Typography variant="subtitle2" align="center" sx={styles.dataTitle}>Name</Typography>
                  <Typography variant="body1" align="center" sx={styles.dataValue}>{data[0].name}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" align="center" sx={styles.dataTitle}>Surname</Typography>
                  <Typography variant="body1" align="center" sx={styles.dataValue}>{data[0].surname}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" align="center" sx={styles.dataTitle}>Email</Typography>
                  <Typography variant="body1" align="center" sx={styles.dataValue}>{data[0].mail}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" align="center" sx={styles.dataTitle}>Phone number</Typography>
                  <Typography variant="body1" align="center" sx={styles.dataValue}>{data[0].phonenumber}</Typography>
                </Grid>
              </Grid>
            </Box>
          }
        </Box>
      </Paper>
    </Box>
  );
};
