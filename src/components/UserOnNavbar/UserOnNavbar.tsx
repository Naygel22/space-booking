import { Avatar, Box, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { BsBoxArrowRight, BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { styles } from "./UserOnNavbar.styles";

type UserOnNavbarType = {
  userData: Array<{
    name: string;
    surname: string;
  }> | undefined
  handleLogout: () => void
};

export const UserOnNavbar = ({ userData, handleLogout }: UserOnNavbarType) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    handleLogout();
    handleClose();
  };

  const handleAccountClick = () => {
    navigate('/profile');
    handleClose();
  };

  return (
    <Box sx={styles.avatarBadge} id='user-on-navbar'>
      <Avatar
        onClick={handleClick}
        sx={{ cursor: 'pointer' }}
      >
        {userData?.[0] ? userData[0].name[0] : null}
      </Avatar>
      <Typography sx={styles.userNameOnBadge}>{userData?.[0] ? userData[0].name : null}</Typography>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleAccountClick}>
          <ListItem >
            <ListItemIcon>
              <BsPersonCircle />
            </ListItemIcon>
            <ListItemText primary="My account" />
          </ListItem>
        </MenuItem>

        <MenuItem onClick={handleLogoutClick}>
          <ListItem>
            <ListItemIcon>
              <BsBoxArrowRight />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </MenuItem>
      </Menu>
    </Box>
  );
};
