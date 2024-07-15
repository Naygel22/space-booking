import { Link, useNavigate } from "react-router-dom";
import { useSessionContext } from "../SessionProvider";
import { supabaseClient } from "../../supabaseClient";
import { useQuery } from "@tanstack/react-query";
import { getUserDataById } from "../../api/getUserDataById";
import { UserOnNavbar } from "../UserOnNavbar/UserOnNavbar";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { styles } from "./Navbar.styles";

export const Navbar = () => {
  const { session } = useSessionContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.error('Error logging out:', error.message);
    }
    navigate('/');
  };

  const { data } = useQuery({
    queryKey: ['userName'],
    queryFn: () => getUserDataById(session),
    enabled: !!session,
  });

  return (
    <AppBar position="static" sx={styles.navbar}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '70px', paddingX: '80px' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box component='img' src="/assets/images/navbarLogo.jpeg" style={{ width: '250px', borderRadius: '20px' }} />
          </Box>
        </Link>

        <Box sx={styles.navbarButtons}>
          {['/', '/booking', '/pricing', '/contact'].map((path, index) => (
            <Link key={index} to={path} style={styles.link as React.CSSProperties}>
              <Button sx={styles.link}>
                {path.slice(1) || "Home"}
              </Button>
            </Link>
          ))}
        </Box>

        {!session ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/login" style={styles.link as React.CSSProperties}>
              <Button sx={styles.link}>Sign in</Button>
            </Link>
            <Link to="/register" style={{ ...styles.link as React.CSSProperties, }}>
              <Button sx={styles.link}>Sign up</Button>
            </Link>
          </Box>
        ) : (
          <Box sx={{ marginLeft: '150px' }}>
            <UserOnNavbar userData={data} handleLogout={handleLogout} />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
