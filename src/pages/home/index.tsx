import { Typography, Button, Container, Box } from "@mui/material";
import HomeImage from '../../../src/assets/images/gettyimages-1195696110-2048x2048.jpg';
import Marquee from "../../components/corporate-bar";
import Cards from "../../components/card";
import Carousel from "../../components/carousel";
import CompentionSection from "../../components/competition/index.";
const HomePage = () => {
  return (
    <div>
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
          maxWidth: "1200px",
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
            sx={{ mb: 2, fontWeight: "bold" }}
          >
            Innovative
            <br />
            Apps,
            <br />
            Exceptional Experiences
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, lineHeight: 1.8 }}
          >
            Transforming Coders into Champions: Elevate Your Skills with
            Cutting-Edge Challenges and Unparalleled Learning Opportunities in
            Mount Simeon.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ px: 4, py: 1.5, fontSize: "1rem", textTransform: "none" }}
          >
            Join the Challenge
          </Button>
        </Box>

        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img
            src={HomeImage}
            alt="Team Working"
            className="rounded-lg shadow-lg"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Box>
      </Box>
      <Box >
        <Typography   variant="h2"
            sx={{ mb: 2, fontWeight: "bold" }}>Master Coding with Us</Typography>
            <Typography
            variant="body1"
            sx={{ mb: 4, lineHeight: 1.8 }}
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
