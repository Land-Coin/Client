import { Box, Container, Toolbar } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import Team from "./Team";


const LandingPage = () => {
  return (
    <Box>
      <Banner />
      <Services />
      <Team />
    </Box>
  );
};

export default LandingPage;
