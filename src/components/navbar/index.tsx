import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Home } from '@mui/icons-material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CustomLink from './nav-link';
import { PATH_APP } from '../../routes/path';

const pages = [
  {
    icon: <Home sx={{ height: 18, width: 18 }} />,
    label: 'Home',
    href: PATH_APP.main,
    isActive: true,
  },
  {
    icon: <ArrowDownwardIcon sx={{ height: 18, width: 18 }} />,
    label: 'Sing in',
    href: "/sign-in",
    isActive: false,
  },
  {
    icon: <LocalPhoneIcon sx={{ height: 18, width: 18 }} />,
    label: 'contact',
    href: PATH_APP.contact,
    isActive: false,
  },
];

interface MainNavProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const MainNav: React.FC<MainNavProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: 'primary.contrastText',
        backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(8px)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          {/* Logo Section */}
          <Box
            sx={{
              mr: 4,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: '40px',
                height: '40px',
                backgroundColor: '#3b82f6',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                },
              }}
            >
              PS
            </Box>
            <Typography
              variant="h6"
              sx={{
                ml: 2,
                fontWeight: 700,
                background: 'linear-gradient(45deg, #3b82f6, #2563eb)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Problem Solver
            </Typography>
          </Box>

          {/* Links Section */}
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Stack direction="row" spacing={2}>
              {pages.map((page) => (
                <Box
                  key={page.label}
                  sx={{
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: page.isActive ? '100%' : 0,
                      height: '2px',
                      background: 'linear-gradient(45deg, #3b82f6, #2563eb)',
                      transition: 'all 0.3s ease',
                      transform: 'translateX(-50%)',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  <CustomLink href={page.href}>
                    <Stack 
                      direction="row" 
                      spacing={1} 
                      alignItems="center"
                      sx={{
                        padding: '8px 16px',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        backgroundColor: page.isActive ? (isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(59, 130, 246, 0.1)') : 'transparent',
                        transform: page.isActive ? 'translateY(-2px)' : 'none',
                        '&:hover': {
                          backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                          transform: 'translateY(-2px)',
                          '& .MuiSvgIcon-root': {
                            color: '#3b82f6',
                            transform: 'scale(1.1)',
                          },
                          '& .MuiTypography-root': {
                            color: '#3b82f6',
                          },
                        },
                      }}
                    >
                      <Box
                        sx={{
                          transition: 'all 0.3s ease',
                          color: page.isActive ? '#3b82f6' : (isDarkMode ? 'white' : 'text.secondary'),
                          transform: page.isActive ? 'scale(1.1)' : 'none',
                        }}
                      >
                        {page.icon}
                      </Box>
                      <Typography 
                        fontSize={14} 
                        fontWeight={600}
                        sx={{
                          transition: 'all 0.3s ease',
                          color: page.isActive ? '#3b82f6' : (isDarkMode ? 'white' : 'text.secondary'),
                        }}
                      >
                        {page.label}
                      </Typography>
                    </Stack>
                  </CustomLink>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Icons Section */}
          <Stack direction="row" spacing={2} alignItems="center">
            {/* Theme Toggle Button */}
            <IconButton 
              onClick={toggleTheme} 
              color="inherit"
              sx={{
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'rotate(180deg)',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                },
              }}
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default MainNav;
