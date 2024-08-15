// Navbar.js
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Link, Box, IconButton, Avatar, Button, Menu, MenuItem } from '@mui/material';
import { Link as RouterLink, NavLink, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FeaturesIcon from '@mui/icons-material/Star';
import ChallengeIcon from '@mui/icons-material/EmojiEvents';
import CompletedIcon from '@mui/icons-material/CheckCircle';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.gif';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    handleMenuClose();
    navigate("/login");
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ transition: 'background-color 0.3s ease', backgroundColor: '#333', padding: '10px 20px' }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component={RouterLink} to="/home" sx={{ textDecoration: 'none', color: '#fff', transition: 'color 0.3s ease' }}>
            Daily Challenge Generator
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          <Link component={NavLink} to="/home" color="inherit" sx={{ mx: 2, textDecoration: 'none', transition: 'color 0.3s ease', display: 'flex', alignItems: 'center', '&.active': { color: '#00bfff' } }}>
            <HomeIcon sx={{ fontSize: 24, marginRight: 5 }} />
            Home
          </Link>
          <Link component={NavLink} to="/features" color="inherit" sx={{ mx: 2, textDecoration: 'none', transition: 'color 0.3s ease', display: 'flex', alignItems: 'center', '&.active': { color: '#00bfff' } }}>
            <FeaturesIcon sx={{ fontSize: 24, marginRight: 5 }} />
            Features
          </Link>
         
          <Link component={NavLink} to="/completedchallenges" color="inherit" sx={{ mx: 2, textDecoration: 'none', transition: 'color 0.3s ease', display: 'flex', alignItems: 'center', '&.active': { color: '#00bfff' } }}>
            <CompletedIcon sx={{ fontSize: 24, marginRight: 5 }} />
            Completed
          </Link>
          <Link component={NavLink} to="/leaderboard" color="inherit" sx={{ mx: 2, textDecoration: 'none', transition: 'color 0.3s ease', display: 'flex', alignItems: 'center', '&.active': { color: '#00bfff' } }}>
            <LeaderboardIcon sx={{ fontSize: 24, marginRight: 5 }} />
            Leaderboard
          </Link>
          <Button component={NavLink} to="/challenges" variant="contained" color="primary" sx={{ padding: '5px 15px', backgroundColor: 'blue', '&:hover': { backgroundColor: '#0099cc' }, ml: 2, marginRight: 2 }}>
            Get Today's Challenge
          </Button>
          {loggedInUser ? (
            <>
              <Typography variant="body2" sx={{ marginRight: 4, color: '#fff', fontSize: 25 }}>
                Welcome, {loggedInUser.username}!
              </Typography>
              <IconButton aria-label="menu" sx={{ marginRight: 1 }} onClick={handleMenuOpen}>
                <SettingsIcon sx={{ fontSize: 24, color: '#fff', '&:hover': { color: '#00bfff' } }} />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>
                  <SettingsIcon sx={{ marginRight: 1 }} /> Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <LogoutIcon sx={{ marginRight: 1 }} /> Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Link component={RouterLink} to="/login" color="inherit" sx={{ textDecoration: 'none', transition: 'color 0.3s ease', display: 'flex', alignItems: 'center', '&.active': { color: '#00bfff' } }}>
              <Avatar src="profile-picture.png" alt="Profile Picture" sx={{ width: 30, height: 30, marginLeft: 2 }} />
            </Link>
          )}
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleMobileMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Menu
          anchorEl={mobileMenuAnchorEl}
          open={Boolean(mobileMenuAnchorEl)}
          onClose={handleMobileMenuClose}
        >
          <MenuItem component={NavLink} to="/home" onClick={handleMobileMenuClose}>
            <HomeIcon sx={{ marginRight: 1 }} /> Home
          </MenuItem>
          <MenuItem component={NavLink} to="/features" onClick={handleMobileMenuClose}>
            <FeaturesIcon sx={{ marginRight: 1 }} /> Features
          </MenuItem>
          
          <MenuItem component={NavLink} to="/completedchallenges" onClick={handleMobileMenuClose}>
            <CompletedIcon sx={{ marginRight: 1 }} /> Completed
          </MenuItem>
          <MenuItem component={NavLink} to="/leaderboard" onClick={handleMobileMenuClose}>
            <LeaderboardIcon sx={{ marginRight: 1 }} /> Leaderboard
          </MenuItem>
          <MenuItem component={NavLink} to="/challenges" onClick={handleMobileMenuClose}>
            <Button variant="contained" color="primary" sx={{ padding: '5px 15px', backgroundColor: 'blue', '&:hover': { backgroundColor: '#0099cc' } }}>
              Get Today's Challenge
            </Button>
          </MenuItem>
          {loggedInUser ? (
            <>
              <MenuItem onClick={handleMobileMenuClose}>
                <Typography variant="body2">
                  Welcome, {loggedInUser.username}!
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <SettingsIcon sx={{ marginRight: 1 }} /> Settings
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <LogoutIcon sx={{ marginRight: 1 }} /> Logout
              </MenuItem>
            </>
          ) : (
            <MenuItem component={RouterLink} to="/login" onClick={handleMobileMenuClose}>
              <Avatar src="profile-picture.png" alt="Profile Picture" sx={{ width: 30, height: 30, marginRight: 1 }} />
              Login
            </MenuItem>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
