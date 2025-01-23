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
    <div>
      <Link color="text.secondary" variant="body2" href="#">
        Privacy Policy
      </Link>
      <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>&nbsp;•&nbsp;</Typography>
      <Link color="text.secondary" variant="body2" href="#">
        Terms of Service
      </Link>
      <Copyright />
    </div>
    <SocialIcons />
  </Box>
);

export default FooterBottom;
