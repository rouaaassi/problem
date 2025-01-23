import { Box, Typography, Button } from "@mui/material";

const CompentionSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        p: 20,
      }}
    >
      <Box
        sx={{
          margin: "auto",
          width: { xs: "90%", md: "70%" },
          borderRadius: "16px",
          padding: "30px 20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Master Competitive Coding Today
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
          }}
        >
          Elevate your programming skills with our expert-led courses and
          challenges. Join coding life to stay ahead in the competitive
          programming world.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "primary",
            padding: "10px 20px",
            textTransform: "none",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "darkgreen",
            },
          }}
        >
          Join Now
        </Button>
      </Box>
    </Box>
  );
};

export default CompentionSection;
