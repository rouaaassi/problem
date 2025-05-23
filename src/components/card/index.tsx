import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";

const cardsData = [
  {
    title: "Beginner Programming Challenges",
    description: "Start your coding journey with our beginner-friendly challenges and build a strong foundation.",
    image: "/gettyimages-2158058979-2048x2048.jpg",
  },
  {
    title: "Advanced Algorithm Training",
    description: "Master complex algorithms with our expert-designed training modules for advanced coders.",
    image: "/gettyimages-1411610158-2048x2048.jpg",
  },
  {
    title: "Code Competition Preparation",
    description: "Get ready for competitive programming contests with tailored practice sessions and insights.",
    image: "/gettyimages-1390285717-2048x2048.jpg",
  },
  {
    title: "Interactive Coding Workshops",
    description: "Engage in hands-on workshops led by professionals to enhance your coding skills interactively.",
    image: "/gettyimages-1344037902-2048x2048.jpg",
  },
];

const Cards = () => {
  return (
    <div>
      <Button variant="outlined" sx={{ mb: 2 }}>
        Optimize performance
      </Button>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          padding: "24px",
        }}
      >
        {cardsData.map((card, index) => (
          <Card
            key={index}
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              image={card.image}
              alt={card.title}
              sx={{
                height: "300px",
                width: "100%", 
                objectFit: "cover",
              }}
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Cards;
