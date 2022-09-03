import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const NavBar = () => {
  return (
    <AppBar sx={{ bgcolor: "#1C1B2D" }}>
      <Toolbar>
        <Container maxWidth="xl" sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ flex: 0.4 }}>
            <Typography>LANDCOIN</Typography>
          </Box>
          <Box sx={{ flex: 0.6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>Transact</Typography>
              <Typography>List Property</Typography>
              <Typography>Search</Typography>
              <Button
                sx={{ bgcolor: "#fff", borderRadius: "50px", color: "#000" }}
              >
                Connect Wallet
              </Button>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
