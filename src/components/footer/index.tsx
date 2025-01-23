import { Box, Container } from '@mui/material';
import NewsletterSubscription from './new-subscription';
import FooterLinks from './footer-links';
import FooterBottom from './footer-bottom';

const Footer = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <NewsletterSubscription />
        <FooterLinks
          title="Problemset"
          links={[
            { name: 'Explore Solutions', href: '#' },
            { name: 'Success Stories', href: '#' },
            { name: 'Top Challenges', href: '#' },
          ]}
        />
        <FooterLinks
          title="Community"
          links={[
            { name: 'About the Platform', href: '#' },
            { name: 'Join the Team', href: '#' },
            { name: 'Media Coverage', href: '#' },
          ]}
        />
        <FooterLinks
          title="Support"
          links={[
            { name: 'Usage Guidelines', href: '#' },
            { name: 'Privacy Policy', href: '#' },
            { name: 'Get Support', href: '#' },
          ]}
        />
      </Box>
      <FooterBottom />
    </Container>
  );
};

export default Footer;
