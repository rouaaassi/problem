import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import SignInCard from '../../components/singin-card';
import Content from '../../components/content';
import { Box, useTheme } from '@mui/material';

export default function SignInSide() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: isDarkMode 
          ? 'linear-gradient(135deg, #1a1a1a, #2d2d2d)'
          : 'linear-gradient(135deg, #f5f7fa, #ffffff)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDarkMode
            ? 'radial-gradient(circle at 50% 50%, rgba(25, 118, 210, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 50% 50%, rgba(25, 118, 210, 0.05) 0%, transparent 50%)',
          zIndex: 0,
        },
      }}
    >
      <CssBaseline enableColorScheme />
      <Stack
        direction={{ xs: 'column-reverse', md: 'row' }}
        sx={{
          position: 'relative',
          zIndex: 1,
          justifyContent: 'center',
          alignItems: { xs: 'stretch', md: 'center' },
          gap: { xs: 4, sm: 6, md: 8, lg: 12 },
          p: { xs: 2, sm: 3, md: 4 },
          m: 'auto',
          maxWidth: { xs: '100%', md: '1200px', lg: '1400px' },
          width: '100%',
        }}
      >
        <Content />
        <SignInCard />
      </Stack>
    </Box>
  );
}
