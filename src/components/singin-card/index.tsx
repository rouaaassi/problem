import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ForgotPassword from './forget-password';
import LogoIcon from '../../assets/icons/LogoIcon';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '@mui/material/styles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  boxShadow: theme.palette.mode === 'dark'
    ? 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px'
    : 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
    borderRadius: theme.spacing(1),
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
    },
    '&.Mui-focused': {
      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)',
      boxShadow: theme.palette.mode === 'dark'
        ? '0 0 0 2px rgba(100, 181, 246, 0.2)'
        : '0 0 0 2px rgba(25, 118, 210, 0.2)',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
  },
}));

export default function SignInCard() {
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const { login } = useAuth();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const username = data.get('username') as string;
    const password = data.get('password') as string;

    try {
      await login(username, password);
      setSnackbarMessage('Login successful! Redirecting to dashboard...');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error:', error);
      setSnackbarMessage('Login failed. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  return (
    <Card variant="outlined">
      <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mb: 2 }}>
        <LogoIcon />
      </Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{ 
          width: '100%', 
          fontSize: { xs: '1.75rem', sm: '2rem' },
          color: isDarkMode ? 'white' : 'text.primary',
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 1,
        }}
      >
        Welcome Back
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
          textAlign: 'center',
          mb: 3,
        }}
      >
        Sign in to continue to your account
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >
        <FormControl>
          <StyledTextField
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="username"
            autoFocus
            required
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <PersonOutlineIcon
                  sx={{
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
                    mr: 1,
                  }}
                />
              ),
            }}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
            <FormLabel 
              htmlFor="password"
              sx={{ 
                color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
                fontSize: '0.875rem',
              }}
            >
              Password
            </FormLabel>
            <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ 
                alignSelf: 'baseline',
                color: isDarkMode ? 'primary.light' : 'primary.main',
                fontSize: '0.875rem',
                '&:hover': {
                  color: isDarkMode ? 'primary.main' : 'primary.dark',
                },
              }}
            >
              Forgot password?
            </Link>
          </Box>
          <StyledTextField
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            required
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <LockOutlinedIcon
                  sx={{
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
                    mr: 1,
                  }}
                />
              ),
            }}
          />
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              value="remember"
              color="primary"
              sx={{
                '&.Mui-checked': {
                  color: isDarkMode ? 'primary.light' : 'primary.main',
                },
              }}
            />
          }
          label="Remember me"
          sx={{ 
            color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
            fontSize: '0.875rem',
          }}
        />
        <ForgotPassword open={open} handleClose={handleClose} />
        <Button 
          type="submit" 
          fullWidth 
          variant="contained"
          sx={{
            mt: 1,
            py: 1.5,
            background: isDarkMode
              ? 'linear-gradient(45deg, #64B5F6, #4FC3F7)'
              : 'linear-gradient(45deg, #2196F3, #21CBF3)',
            '&:hover': {
              background: isDarkMode
                ? 'linear-gradient(45deg, #42A5F5, #29B6F6)'
                : 'linear-gradient(45deg, #1976D2, #1E88E5)',
              transform: 'translateY(-2px)',
              boxShadow: isDarkMode
                ? '0 0 20px rgba(100, 181, 246, 0.5)'
                : '0 0 20px rgba(33, 150, 243, 0.5)',
            },
            transition: 'all 0.3s ease',
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          Sign in
        </Button>
        <Typography 
          sx={{ 
            textAlign: 'center',
            color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
            mt: 2,
            fontSize: '0.875rem',
          }}
        >
          Don&apos;t have an account?{' '}
          <Link
            href="/sign-up"
            variant="body2"
            sx={{ 
              color: isDarkMode ? 'primary.light' : 'primary.main',
              fontWeight: 'bold',
              '&:hover': {
                color: isDarkMode ? 'primary.main' : 'primary.dark',
              },
            }}
          >
            Sign up
          </Link>
        </Typography>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ 
            width: '100%',
            boxShadow: isDarkMode
              ? '0 4px 12px rgba(0, 0, 0, 0.3)'
              : '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Card>
  );
}