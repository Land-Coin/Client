import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Team = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(106.42deg, #E2E7E6 -0.82%, #ECE5E6 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", justifyContent: "center", pt: "5%" }}>
          <Typography
            sx={{
              color: "#1C1B2D",
              fontSize: "52px",
              fontWeight: 700,
              lineHeight: "63px",
            }}
          >
            Our Team
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Team;
