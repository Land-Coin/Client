import { Box, Container, Toolbar } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import Services from "./Services";

const LandingPage = () => {
  return (
    <Box>
      <Banner />
      <Services />
    </Box>
  );
};

export default LandingPage;
