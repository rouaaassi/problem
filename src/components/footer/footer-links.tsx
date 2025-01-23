import { Box, Link, Typography } from '@mui/material';

interface FooterLinksProps {
  title: string;
  links: { name: string; href: string }[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => (
  <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 1 }}>
    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
      {title}
    </Typography>
    {links.map((link) => (
      <Link key={link.name} color="text.secondary" variant="body2" href={link.href}>
        {link.name}
      </Link>
    ))}
  </Box>
);

export default FooterLinks;
