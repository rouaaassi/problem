import { Typography, Button, Container, Box, useTheme } from "@mui/material";
import HomeImage from '../../../src/assets/images/gettyimages-1195696110-2048x2048.jpg';
import Marquee from "../../components/corporate-bar";
import Cards from "../../components/card";
import Carousel from "../../components/carousel";
import CompentionSection from "../../components/competition/index.";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJoinClick = () => {
    navigate('/sign-in');
  };

  return (
    <div className={`min-h-screen width-full ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '70vh',
          overflow: 'hidden',
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${HomeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: isDarkMode ? 'brightness(0.7)' : 'brightness(0.9)',
            transform: `scale(${1 + scrollPosition * 0.0005})`,
            transition: 'transform 0.3s ease-out',
          }}
        />

        {/* Glass Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: isDarkMode 
              ? 'rgba(0, 0, 0, 0.5)'
              : 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {/* Content Container */}
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              color: isDarkMode ? 'white' : 'inherit',
              maxWidth: '800px',
              px: { xs: 2, sm: 4 },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                fontWeight: "bold",
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              }}
            >
              Innovative Apps,
              <br />
              Exceptional
              <Box component="span" sx={{ color: isDarkMode ? '#64B5F6' : '#2196F3' }}>
                 Experiences
              </Box>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                lineHeight: 1.6,
                color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'inherit',
                fontSize: { xs: '1rem', sm: '1.25rem' },
                maxWidth: '600px',
              }}
            >
              Transforming Coders into Champions: Elevate Your Skills with
              Cutting-Edge Challenges and Unparalleled Learning Opportunities in
              Mount Simeon.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleJoinClick}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                textTransform: "none",
                background: isDarkMode
                  ? 'linear-gradient(45deg, #64B5F6, #4FC3F7)'
                  : 'linear-gradient(45deg, #2196F3, #21CBF3)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: isDarkMode
                    ? '0 0 20px rgba(100, 181, 246, 0.5)'
                    : '0 0 20px rgba(33, 150, 243, 0.5)',
                  background: isDarkMode
                    ? 'linear-gradient(45deg, #42A5F5, #29B6F6)'
                    : 'linear-gradient(45deg, #1976D2, #1E88E5)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Join the Challenge
            </Button>
          </Container>
        </Box>
      </Box>

      {/* Rest of the Content */}
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 2, sm: 4 },
          py: { xs: 2, sm: 3 },
          px: { xs: 1, sm: 2 },
          maxWidth: '100%',
          color: isDarkMode ? 'white' : 'inherit',
        }}
      >
        <Box sx={{ width: '100%', mt: 2 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 1.5,
              fontWeight: "bold",
              color: isDarkMode ? 'white' : 'inherit',
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
            }}
          >
            Master Coding with Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              lineHeight: 1.6,
              color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'inherit',
              fontSize: { xs: '0.9rem', sm: '1rem' },
            }}
          >
            At the heart of Mount Simeon District in Aleppo Governorate,
            Coding Life stands as a premier institution dedicated to fostering competitive
            programming excellence. Our platform provides aspiring programmers with the tools and
            resources needed to hone their skills and excel in global coding challenges. We are committed
            to nurturing talents, promoting innovative problem-solving techniques, and supporting a vibrant
            community of coders who aspire to push the boundaries of technology and creativity.
          </Typography>
        </Box>

        <Cards />
      </Container>
      <Marquee />
      <Carousel />
      <CompentionSection />
    </div>
  );
};

export default HomePage;
