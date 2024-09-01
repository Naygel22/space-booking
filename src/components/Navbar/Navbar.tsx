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
import { ROUTES } from "../../routes";

export const Navbar = () => {
  const { session, userData: data } = useSessionContext();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1300));
  const isVerySmallScreen = useMediaQuery(theme.breakpoints.down(600));

  const [drawerOpen, setDrawerOpen] = useState(false);

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
    navigate(ROUTES.home);
  };

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
          <>
            <ListItem component={Link} to={ROUTES.profile}
              sx={{
                color: 'white',
                textDecoration: 'none'
              }}>
              <ListItemText primary="My account" />
            </ListItem>
            <ListItem
              onClick={handleLogout}
              sx={{
                color: 'white',
                textDecoration: 'none',
                cursor: 'pointer'
              }}>
              <ListItemText primary="Logout" />
            </ListItem>
          </>

        )}
        {!session && (
          <>
            <ListItem component={Link} to={ROUTES.login}>
              <ListItemText primary="Sign in"
                sx={{
                  color: 'white',
                  textDecoration: 'none'
                }} />
            </ListItem>
            <ListItem component={Link} to={ROUTES.register}>
              <ListItemText primary="Sign up"
                sx={{
                  color: 'white',
                  textDecoration: 'none'
                }} />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={styles.navbar} id="top-nav" >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '70px',
        }}
      >
        <Link to={ROUTES.home} style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
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
                <Link to={ROUTES.login} style={styles.link as React.CSSProperties}>
                  <Button sx={styles.link}>Sign in</Button>
                </Link>
                <Link to={ROUTES.register} style={{ ...styles.link as React.CSSProperties }}>
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
