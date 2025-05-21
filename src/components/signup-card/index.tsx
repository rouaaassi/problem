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
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '@mui/material/styles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  marginTop: '-4rem',
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'white',
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

export default function SignUpCard() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const { register } = useAuth() as unknown as { register: (username: string, email: string, password: string) => Promise<void> };
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const username = data.get('username') as string;
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    const confirmPassword = data.get('confirmPassword') as string;

    if (password !== confirmPassword) {
      setSnackbarMessage('Passwords do not match');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    try {
      await register(username, email, password);
      setSnackbarMessage('Registration successful! Redirecting to login...');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error:', error);
      setSnackbarMessage('Registration failed. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  return (
    <Card variant="outlined">
      <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mb: 2 }}>
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
        Create Account
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
          textAlign: 'center',
          mb: 3,
        }}
      >
        Join our community and start your programming journey
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
          <StyledTextField
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            required
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <EmailOutlinedIcon
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
          <FormLabel 
            htmlFor="password"
            sx={{ 
              color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
              fontSize: '0.875rem',
              mb: 0.5,
            }}
          >
            Password
          </FormLabel>
          <StyledTextField
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="new-password"
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
        <FormControl>
          <FormLabel 
            htmlFor="confirmPassword"
            sx={{ 
              color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
              fontSize: '0.875rem',
              mb: 0.5,
            }}
          >
            Confirm Password
          </FormLabel>
          <StyledTextField
            name="confirmPassword"
            placeholder="••••••"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
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
              value="terms"
              color="primary"
              required
              sx={{
                '&.Mui-checked': {
                  color: isDarkMode ? 'primary.light' : 'primary.main',
                },
              }}
            />
          }
          label={
            <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
              I agree to the{' '}
              <Link
                href="/terms"
                sx={{
                  color: isDarkMode ? 'primary.light' : 'primary.main',
                  fontWeight: 'bold',
                  '&:hover': {
                    color: isDarkMode ? 'primary.main' : 'primary.dark',
                  },
                }}
              >
                Terms of Service
              </Link>
              {' '}and{' '}
              <Link
                href="/privacy"
                sx={{
                  color: isDarkMode ? 'primary.light' : 'primary.main',
                  fontWeight: 'bold',
                  '&:hover': {
                    color: isDarkMode ? 'primary.main' : 'primary.dark',
                  },
                }}
              >
                Privacy Policy
              </Link>
            </Typography>
          }
          sx={{ 
            color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
            fontSize: '0.875rem',
          }}
        />
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
          Create Account
        </Button>
        <Typography 
          sx={{ 
            textAlign: 'center',
            color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
            mt: 2,
            fontSize: '0.875rem',
          }}
        >
          Already have an account?{' '}
          <Link
            href="/sign-in"
            variant="body2"
            sx={{ 
              color: isDarkMode ? 'primary.light' : 'primary.main',
              fontWeight: 'bold',
              '&:hover': {
                color: isDarkMode ? 'primary.main' : 'primary.dark',
              },
            }}
          >
            Sign in
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
