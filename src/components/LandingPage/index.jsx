import { Box, Container, Toolbar } from "@mui/material";
import React from "react";
import Banner from "./Banner";

const LandingPage = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(106.42deg, #E2E7E6 -0.82%, #ECE5E6 100%)",
      }}
    >
      <Banner />
    </Box>
  );
};

export default LandingPage;
