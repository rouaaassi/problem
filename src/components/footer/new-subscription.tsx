import { Box, Button, InputLabel, Stack, TextField, Typography } from '@mui/material';
import LogoIcon from '../../assets/icons/LogoIcon';

const NewsletterSubscription = () => (
  <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
    <LogoIcon />
    <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
      Join the competition
    </Typography>
    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
      Subscribe for weekly updates!
    </Typography>
    <InputLabel htmlFor="email-newsletter">Email</InputLabel>
    <Stack direction="row" spacing={1} useFlexGap>
      <TextField
        id="email"
        hiddenLabel
        size="small"
        variant="outlined"
        fullWidth
        placeholder="Your email address"
        sx={{ width: '250px' }}
      />
      <Button variant="contained" color="primary" size="small" sx={{ flexShrink: 0 }}>
        Subscribe
      </Button>
    </Stack>
  </Box>
);

export default NewsletterSubscription;
