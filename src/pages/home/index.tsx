import { Typography, Button, Container, Box, useTheme } from "@mui/material";
import HomeImage from '../../../src/assets/images/gettyimages-1195696110-2048x2048.jpg';
import Marquee from "../../components/corporate-bar";
import Cards from "../../components/card";
import Carousel from "../../components/carousel";
import CompentionSection from "../../components/competition/index.";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div 
        className={`fixed inset-0 ${isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md`}
        style={{
          zIndex: -1,
        }}
      />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 6 },
          py: { xs: 4, sm: 6 },
          px: { xs: 2, sm: 3 },
          maxWidth: '100%',
          color: isDarkMode ? 'white' : 'inherit',
        }}
      >
        <Box
          sx={{
            width: "100%",
            margin: "0 auto",
            display: 'flex',
            flexDirection: { xs: "column", lg: "row" },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              sx={{ 
                mb: 2, 
                fontWeight: "bold",
                color: isDarkMode ? 'white' : 'inherit',
              }}
            >
              Innovative
              <br />
              Apps,
              <br />
              Exceptional Experiences
            </Typography>
            <Typography
              variant="body1"
              sx={{ 
                mb: 4, 
                lineHeight: 1.8,
                color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'inherit',
              }}
            >
              Transforming Coders into Champions: Elevate Your Skills with
              Cutting-Edge Challenges and Unparalleled Learning Opportunities in
              Mount Simeon.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ 
                px: 4, 
                py: 1.5, 
                fontSize: "1rem", 
                textTransform: "none",
                position: 'relative',
                overflow: 'hidden',
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
          </Box>

          <Box 
            sx={{ 
              flex: 1, 
              display: 'flex', 
              justifyContent: 'center',
              transform: `translateX(${scrollPosition * 0.1}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            <img
              src={HomeImage}
              alt="Team Working"
              className="rounded-lg shadow-lg"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: isDarkMode 
                  ? '0 4px 12px rgba(0, 0, 0, 0.3)'
                  : '0 4px 12px rgba(0, 0, 0, 0.1)',
                transform: `rotate(${scrollPosition * 0.02}deg)`,
                transition: 'transform 0.3s ease-out',
                filter: isDarkMode ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Box>

        <Box>
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 2, 
              fontWeight: "bold",
              color: isDarkMode ? 'white' : 'inherit',
            }}
          >
            Master Coding with Us
          </Typography>
          <Typography
            variant="body1"
            sx={{ 
              mb: 4, 
              lineHeight: 1.8,
              color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'inherit',
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
      <Footer />
    </div>
  );
};

export default HomePage;
