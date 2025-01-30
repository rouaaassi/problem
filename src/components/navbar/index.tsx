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
    href:PATH_APP.main,
  },
  {
    icon: <ArrowDownwardIcon sx={{ height: 18, width: 18 }} />,
    label: 'Sing in',
    href: "/sign-in",
  },
  {
    icon: <LocalPhoneIcon sx={{ height: 18, width: 18 }} />,
    label: 'contact',
    href: PATH_APP.contact,
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
      }}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters>
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
                <CustomLink href={page.href} key={page.label}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    {page.icon}
                    <Typography fontSize={14} fontWeight={700}>
                      {page.label}
                    </Typography>
                  </Stack>
                </CustomLink>
              ))}
            </Stack>
          </Box>

          {/* Icons Section */}
          <Stack direction="row" spacing={2} alignItems="center">
            {/* Theme Toggle Button */}
            <IconButton onClick={toggleTheme} color="inherit">
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default MainNav;
