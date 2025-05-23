import { Box } from "@mui/material";
import { keyframes } from "@emotion/react";

const companies = [
  {
    image: "/logo-ipsum-1.png",
  },
  {
    image: "/logo-ipsum-2.png",
  },
  {
    image: "/logo-ipsum-3.png",
  },
  {
    image: "/logo-ipsum-4.png",
  },
  {
    image: "/logo-ipsum-2.png",
  },
  {
    image: "/logo-ipsum-3.png",
  },
  {
    image: "/logo-ipsum-4.png",
  },
 
];

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(-40%);
  }
`;

const Marquee = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px 0",
        overflow: "hidden",
        position: "relative",
        whiteSpace: "nowrap",
        mb: 24,
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          animation: `${marqueeAnimation} 20s linear infinite`,
          whiteSpace: "nowrap",
        }}
      >
        {[...companies].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "inline-block",
              marginRight: "30px",
            }}
          >
            <img
              src={item.image}
              alt={`company-logo-${index}`}
              style={{
                height: "60px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Marquee;
