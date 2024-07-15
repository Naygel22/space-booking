import { useQuery } from "@tanstack/react-query";
import { getUserDataById } from "../../api/getUserDataById";
import { useSessionContext } from "../SessionProvider";
import { Avatar, Box, Grid, Typography, CircularProgress, Paper } from "@mui/material";
import { styles } from "./UserProfile.styles";

export const UserProfile = () => {
  const { session } = useSessionContext();

  const { data, isLoading, error } = useQuery({
    queryKey: ['userName'],
    queryFn: () => getUserDataById(session),
    enabled: !!session,
  });

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return <Typography>Error loading user data</Typography>;
  }
  if (!data) {
    return <Typography>No data available</Typography>;
  }

  return (
    <Box>
      <Box >
        <Paper sx={{ padding: 10, width: '100%', height: '100%', backgroundColor: '#f1f0ea', }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar sx={styles.avatar}>
              {data[0].name[0]}
            </Avatar>
            <Box sx={styles.nameAndSurname}>
              <Typography variant="body1" align="center" sx={styles.titleUserName}>{data[0].name}</Typography>
              <Typography variant="body1" align="center" sx={styles.titleUserSurname}>{data[0].surname}</Typography>
            </Box>
            <Box marginTop={5} width="100%">
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary" align="center">Name</Typography>
                  <Typography variant="body1" align="center">{data[0].name}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary" align="center">Surname</Typography>
                  <Typography variant="body1" align="center">{data[0].surname}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary" align="center">Email</Typography>
                  <Typography variant="body1" align="center">{data[0].mail}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary" align="center">Phone number</Typography>
                  <Typography variant="body1" align="center">{data[0].phonenumber}</Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};
