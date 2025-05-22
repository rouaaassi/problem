import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  useTheme,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import CodeIcon from '@mui/icons-material/Code';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  boxShadow: theme.palette.mode === 'dark'
    ? 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px'
    : 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px',
}));

const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const DashboardNavbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [notificationsAnchorEl, setNotificationsAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/sign-in');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationsAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationsClose = () => {
    setNotificationsAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/sign-in');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      <StyledAppBar position="fixed">
        <Toolbar>
          <CodeIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: theme.palette.text.primary }}>
            Problem Solver
          </Typography>
          
          <IconButton
            size="large"
            onClick={handleNotificationsMenu}
            color="inherit"
            sx={{ mr: 2 }}
          >
            <NotificationsIcon />
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
              Welcome, {user?.email?.split('@')[0] || 'User'}
            </Typography>
            <IconButton
              size="large"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar sx={{ width: 32, height: 32, bgcolor: theme.palette.primary.main }}>
                {user?.email?.[0]?.toUpperCase() || 'U'}
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </StyledAppBar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1.5,
            minWidth: 200,
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        <MenuItem component={Link} to="/profile" onClick={handleClose}>
          <AccountCircleIcon sx={{ mr: 2 }} /> Profile
        </MenuItem>
        <MenuItem component={Link} to="/settings" onClick={handleClose}>
          <AssignmentIcon sx={{ mr: 2 }} /> Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <Typography color="error">Logout</Typography>
        </MenuItem>
      </Menu>

      <Menu
        anchorEl={notificationsAnchorEl}
        open={Boolean(notificationsAnchorEl)}
        onClose={handleNotificationsClose}
        PaperProps={{
          sx: {
            mt: 1.5,
            minWidth: 300,
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        <MenuItem onClick={handleNotificationsClose}>
          <Typography variant="body2" color="text.secondary">
            No new notifications
          </Typography>
        </MenuItem>
      </Menu>

      <Box sx={{ pt: 10, pb: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {/* Quick Stats */}
            <Grid item xs={12} md={4}>
              <StatCard>
                <EmojiEventsIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                <Typography variant="h4">12</Typography>
                <Typography variant="body2" color="text.secondary">Problems Solved</Typography>
              </StatCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <StatCard>
                <AssignmentIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                <Typography variant="h4">5</Typography>
                <Typography variant="body2" color="text.secondary">Active Challenges</Typography>
              </StatCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <StatCard>
                <CodeIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                <Typography variant="h4">3</Typography>
                <Typography variant="body2" color="text.secondary">Solutions Submitted</Typography>
              </StatCard>
            </Grid>

            {/* Quick Actions */}
            <Grid item xs={12}>
              <Paper sx={{ p: 3, backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.9)' }}>
                <Typography variant="h6" gutterBottom>Quick Actions</Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    component={Link}
                    to="/problems/new"
                  >
                    New Problem
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<AssignmentIcon />}
                    component={Link}
                    to="/problems"
                  >
                    Browse Problems
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<CodeIcon />}
                    component={Link}
                    to="/solutions"
                  >
                    View Solutions
                  </Button>
                </Box>
              </Paper>
            </Grid>

            {/* Recent Activity */}
            <Grid item xs={12}>
              <Paper sx={{ p: 3, backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.9)' }}>
                <Typography variant="h6" gutterBottom>Recent Activity</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    No recent activity to show
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default DashboardNavbar;
