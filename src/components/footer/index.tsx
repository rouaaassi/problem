import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import { 
  Code as CodeIcon,
  Group as GroupIcon,
  Help as HelpIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
  Speed as SpeedIcon,
  Memory as MemoryIcon,
  Timer as TimerIcon
} from '@mui/icons-material';
import FooterBottom from './footer-bottom';

const Footer = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const footerLinks = [
    {
      title: "Problemset",
      icon: <CodeIcon sx={{ mr: 1 }} />,
      links: [
        { name: 'Explore Solutions', href: '#' },
        { name: 'Success Stories', href: '#' },
        { name: 'Top Challenges', href: '#' },
      ]
    },
    {
      title: "Community",
      icon: <GroupIcon sx={{ mr: 1 }} />,
      links: [
        { name: 'About the Platform', href: '#' },
        { name: 'Join the Team', href: '#' },
        { name: 'Media Coverage', href: '#' },
      ]
    },
    {
      title: "Support",
      icon: <HelpIcon sx={{ mr: 1 }} />,
      links: [
        { name: 'Usage Guidelines', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Get Support', href: '#' },
      ]
    }
  ];

  const guidelines = [
    {
      title: "Time Limits",
      icon: <TimerIcon sx={{ mr: 1 }} />,
      items: [
        { name: 'Easy Problems: 1 second', value: '1s' },
        { name: 'Medium Problems: 2 seconds', value: '2s' },
        { name: 'Hard Problems: 3 seconds', value: '3s' },
      ]
    },
    {
      title: "Memory Limits",
      icon: <MemoryIcon sx={{ mr: 1 }} />,
      items: [
        { name: 'Standard Limit', value: '256 MB' },
        { name: 'Extended Limit', value: '512 MB' },
        { name: 'Special Cases', value: '1 GB' },
      ]
    },
    {
      title: "Performance",
      icon: <SpeedIcon sx={{ mr: 1 }} />,
      items: [
        { name: 'Time Complexity', value: 'O(n log n)' },
        { name: 'Space Complexity', value: 'O(n)' },
        { name: 'Test Cases', value: '100+ per problem' },
      ]
    }
  ];

  const socialLinks = [
    { icon: <GitHubIcon />, href: '#' },
    { icon: <LinkedInIcon />, href: '#' },
    { icon: <TwitterIcon />, href: '#' },
    { icon: <YouTubeIcon />, href: '#' },
  ];

  return (
    <Box
      sx={{
        backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.05)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid',
        borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 6 },
          py: { xs: 6, sm: 8 },
        }}
      >
        {/* Main Footer Content */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            width: '100%',
            justifyContent: 'space-between',
            gap: { xs: 4, md: 2 },
          }}
        >
          {/* Left Section - Links */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 4, md: 2 },
              flex: 1,
            }}
          >
            {footerLinks.map((section) => (
              <Box
                key={section.title}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'center', md: 'flex-start' },
                  gap: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: isDarkMode ? 'white' : 'text.primary',
                    fontWeight: 'bold',
                  }}
                >
                  {section.icon}
                  {section.title}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    gap: 1,
                  }}
                >
                  {section.links.map((link) => (
                    <Button
                      key={link.name}
                      href={link.href}
                      sx={{
                        color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
                        '&:hover': {
                          color: isDarkMode ? 'white' : 'primary.main',
                          backgroundColor: 'transparent',
                        },
                        textTransform: 'none',
                        justifyContent: { xs: 'center', md: 'flex-start' },
                        minWidth: 'auto',
                      }}
                    >
                      {link.name}
                    </Button>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>

          {/* Right Section - Guidelines */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              width: { xs: '100%', lg: '300px' },
              borderLeft: { lg: '1px solid' },
              borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              pl: { lg: 4 },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: isDarkMode ? 'white' : 'text.primary',
                fontWeight: 'bold',
                textAlign: { xs: 'center', lg: 'left' },
              }}
            >
              Competition Guidelines
            </Typography>
            {guidelines.map((section) => (
              <Box
                key={section.title}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: isDarkMode ? 'white' : 'text.primary',
                    fontWeight: 'bold',
                  }}
                >
                  {section.icon}
                  {section.title}
                </Typography>
                {section.items.map((item) => (
                  <Box
                    key={item.name}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
                    }}
                  >
                    <Typography variant="body2">{item.name}</Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: isDarkMode ? 'primary.light' : 'primary.main',
                        fontWeight: 'bold',
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Social Links */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            width: '100%',
            pt: 2,
            borderTop: '1px solid',
            borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          }}
        >
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              href={social.href}
              sx={{
                color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
                '&:hover': {
                  color: isDarkMode ? 'white' : 'primary.main',
                  backgroundColor: 'transparent',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              {social.icon}
            </Button>
          ))}
        </Box>

        <FooterBottom />
      </Container>
    </Box>
  );
};

export default Footer;
