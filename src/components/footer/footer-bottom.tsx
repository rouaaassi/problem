import { Box, Link, Typography } from '@mui/material';
import SocialIcons from '../../assets/icons/social-icons';
import Copyright from './copy-right';

const FooterBottom = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      pt: { xs: 4, sm: 8 },
      width: '100%',
      borderTop: '1px solid',
      borderColor: 'divider',
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
          fontWeight: 700,
          background: 'linear-gradient(45deg, #3b82f6, #2563eb)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Problem Solver
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Link color="text.secondary" variant="body2" href="#">
          Privacy Policy
        </Link>
        <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>&nbsp;•&nbsp;</Typography>
        <Link color="text.secondary" variant="body2" href="#">
          Terms of Service
        </Link>
        <Copyright />
      </Box>
    </Box>
    <SocialIcons />
  </Box>
);

export default FooterBottom;
