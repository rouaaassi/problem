import { Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

const SocialIcons = () => (
  <Stack direction="row" spacing={1} useFlexGap sx={{ justifyContent: 'left', color: 'text.secondary' }}>
    <IconButton color="inherit" size="small" href="https://github.com/mui" aria-label="GitHub">
      <FacebookIcon />
    </IconButton>
    <IconButton color="inherit" size="small" href="https://x.com/MaterialUI" aria-label="X">
      <TwitterIcon />
    </IconButton>
    <IconButton color="inherit" size="small" href="https://www.linkedin.com/company/mui/" aria-label="LinkedIn">
      <LinkedInIcon />
    </IconButton>
  </Stack>
);

export default SocialIcons;
