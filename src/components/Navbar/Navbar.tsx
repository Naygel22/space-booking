import { Link, useNavigate } from "react-router-dom";
import { useSessionContext } from "../SessionProvider";
import { supabaseClient } from "../../supabaseClient";
import { UserOnNavbar } from "../UserOnNavbar/UserOnNavbar";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { styles } from "./Navbar.styles";
import { useMount } from "react-use";
import { useTourContext } from "../TourContext";



export const Navbar = () => {
  const { session, userData: data } = useSessionContext();
  const navigate = useNavigate();


  const {
    setState,
    state: { tourActive },
  } = useTourContext();

  useMount(() => {
    if (tourActive) {
      setTimeout(() => {
        setState({ run: true, stepIndex: 0 });
      }, 600);
    }
  });

  const handleClickStart = () => {
    setState({ run: true, tourActive: true });
  };

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.error('Error logging out:', error.message);
    }
    navigate('/');
  };



  return (
    <AppBar position="static" sx={styles.navbar} id="top-nav">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '70px', paddingX: '80px' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box component='img' src="/assets/images/navbarLogo.jpeg" style={{ width: '250px', borderRadius: '20px' }} />
          </Box>
        </Link>

        <Box sx={styles.navbarButtons}>
          {['/', '/booking', '/pricing', '/contact'].map((path, index) => (
            <Link key={index} to={path} style={styles.link as React.CSSProperties}>
              <Button sx={styles.link} id={path === '/booking' ? 'booking-button' : undefined}>
                {path.slice(1) || "Home"}
              </Button>
            </Link>
          ))}
          {session && <Button onClick={handleClickStart} sx={styles.tourButton}>Tour</Button>}
        </Box>


        {!session ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/login" style={styles.link as React.CSSProperties}>
              <Button sx={styles.link}>Sign in</Button>
            </Link>
            <Link to="/register" style={{ ...styles.link as React.CSSProperties }}>
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
