import { Avatar, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type UserOnNavbarType = {
  userData: Array<{
    name: string;
    surname: string;
  }>
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
    <div className="avatarBadge">
      <Avatar
        onClick={handleClick}
        sx={{ cursor: 'pointer' }}
      >
        {userData ? userData[0].name[0] : null}
      </Avatar>
      <div className="userNameOnBadge">{userData ? userData[0].name : null}</div>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleAccountClick}>My account</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
    </div>
  );
};
