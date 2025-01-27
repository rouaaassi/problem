import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">App Name</Typography>
        {/* <Button color="inherit" component={Link} to="/login">Login</Button> */}
        <Button color="inherit" component={Link} to="/Problems">Problems</Button>
        <Button color="inherit" component={Link} to="/Solutions">Solutions</Button>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavbar;
