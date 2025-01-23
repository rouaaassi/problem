import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";

const carouselItems = [
  {
    image: "../../../src/assets/images/gettyimages-2186172623-2048x2048.jpg",
  },
  {
    image: "../../../src/assets/images/gettyimages-2158058979-2048x2048.jpg",
  },
  {
    image: "../../../src/assets/images/gettyimages-1671583770-2048x2048.jpg",
  },
  {
    image: "../../../src/assets/images/gettyimages-1411610158-2048x2048.jpg",
  },
  {
    image: "../../../src/assets/images/gettyimages-1422787212-2048x2048.jpg",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        width: "auto",
        height: "auto",
      }}
    >
      {carouselItems.map((item, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            width: index === currentIndex ? "60%" : "40%",
            height: "100%",
            transition: "all 0.5s ease",
            filter: index === currentIndex ? "none" : "blur(4px)",
            opacity: index === currentIndex ? 1 : 0.5,
            transform: index === currentIndex ? "scale(1)" : "scale(0.8)",
          }}
        >
          <img
            src={item.image}
            alt={`carousel-item-${index}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Box>
      ))}

      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      >
        <ArrowBackIos />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Carousel;
