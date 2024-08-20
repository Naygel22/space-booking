import { AppBar, Box, Button, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link, useNavigate } from "react-router-dom";
import { useSessionContext } from "../../context/SessionProvider";
import { supabaseClient } from "../../supabaseClient";
import { UserOnNavbar } from "../UserOnNavbar/UserOnNavbar";
import { styles } from "./Navbar.styles";
import { useMount } from "react-use";
import { useTourContext } from "../../context/TourContext";
import { useState } from "react";

export const Navbar = () => {
  const { session, userData: data } = useSessionContext();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1300)); // Użycie media query do sprawdzenia rozmiaru ekranu
  const isVerySmallScreen = useMediaQuery(theme.breakpoints.down('xs')); // Dodatkowe media query dla bardzo małych ekranów

  const [drawerOpen, setDrawerOpen] = useState(false); // Stan dla otwierania i zamykania drawera

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

  // Funkcja do obsługi otwierania/zamykania drawera
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Menu mobilne w Drawerze
  const drawer = (
    <Box onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} sx={{
      height: '100%',
      backgroundColor: '#333',
      color: 'white',
    }}>
      <List>
        {['Home', 'Booking', 'Pricing', 'Contact'].map((text, index) => (
          <ListItem key={index} component={Link} to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
            sx={{
              color: 'white',
              textDecoration: 'none'
            }}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {session && (
          <ListItem onClick={handleClickStart}>
            <ListItemText primary="Tour" />
          </ListItem>
        )}
        {!session && (
          <>
            <ListItem button component={Link} to="/login">
              <ListItemText primary="Sign in" />
            </ListItem>
            <ListItem button component={Link} to="/register">
              <ListItemText primary="Sign up" />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={styles.navbar} id="top-nav">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '70px',
          paddingX: isVerySmallScreen ? '20px' : '80px', // Zmniejszenie paddingu na bardzo małych ekranach
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              ...(isVerySmallScreen && { width: '200px' }), // Zmniejszenie szerokości logo na bardzo małych ekranach
            }}
          >
            <Box component='img' src="/assets/images/navbarLogo.jpeg" style={{ width: isVerySmallScreen ? '150px' : '250px', borderRadius: '20px' }} />
          </Box>
        </Link>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ marginRight: isVerySmallScreen ? '10px' : '20px' }} // Zmniejszenie marginesu między ikoną menu a krawędzią
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
