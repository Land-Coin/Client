import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(106.42deg, #1C1B2D -0.82%, #18162F 100%)",
      }}
    >
      <Container>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "52px",
              lineHeight: "63px",
              color: "#fff",
              mt: "7%",
            }}
          >
            Our Services
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
