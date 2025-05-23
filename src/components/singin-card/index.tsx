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
// import { useTheme } from '@mui/material/styles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from 'react-router-dom';

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
  // const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const isDarkMode = theme.palette.mode === 'dark';
  const navigate = useNavigate();

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSnackbarClose = () => setSnackbarOpen(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('username') as string;
    const password = data.get('password') as string;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSnackbarMessage('Login successful! Redirecting...');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Login error:', error.message);
      setSnackbarMessage(error.message || 'Login failed.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  return (
    <>
      <Card variant="outlined">
        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mb: 2 }}>
          <LogoIcon />
        </Box>
        <Typography component="h1" variant="h4" textAlign="center" fontWeight="bold" mb={1}>
          Welcome Back
        </Typography>
        <Typography variant="body2" textAlign="center" mb={3}>
          Sign in to continue to your account
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <FormControl>
            <StyledTextField
              id="username"
              type="email"
              name="username"
              placeholder="Email"
              autoComplete="username"
              autoFocus
              required
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: <PersonOutlineIcon sx={{ mr: 1 }} />,
              }}
            />
          </FormControl>
          <FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Link component="button" onClick={handleClickOpen} variant="body2">
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
                startAdornment: <LockOutlinedIcon sx={{ mr: 1 }} />,
              }}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <ForgotPassword open={open} handleClose={handleClose} />
          <Button type="submit" fullWidth variant="contained" sx={{ py: 1.5, fontWeight: 'bold' }}>
            Sign in
          </Button>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Typography variant="body2" component="span" sx={{ mr: 1 }}>
              Don't have an account?
            </Typography>
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate('/sign-up')}
              sx={{ fontWeight: 'bold' }}
            >
              Sign up
            </Link>
          </Box>
        </Box>
      </Card>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
