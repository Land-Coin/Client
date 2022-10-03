import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NavDrawer from "./NavDrawer";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <CssBaseline />
      <AppBar sx={{ bgcolor: "#1C1B2D" }}>
        <Toolbar>
          <Container
            maxWidth="xl"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box sx={{ flex: 0.4 }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography color="white" fontWeight="bold">
                  LANDCOIN
                </Typography>
              </Link>
            </Box>
            <Box sx={{ flex: { xs: 0.6 } }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    opacity: { sm: 0, md: 1 },
                    width: { md: "60%" },
                    justifyContent: "space-between",
                  }}
                >
                  <Link to="/transactions" style={{ textDecoration: "none" }}>
                    <Typography color="white" fontWeight="bold">
                      Transact
                    </Typography>
                  </Link>
                  <Typography>List Property</Typography>

                  <Typography>Search</Typography>
                  <Typography>Edit Property</Typography>
                </Box>

                <Button
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: "50px",
                    color: "#000",
                    "&:hover": { backgroundColor: "#fff" },
                  }}
                >
                  Connect Wallet
                </Button>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton onClick={handleOpen}>
                    <MenuIcon sx={{ color: "#fff" }} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <NavDrawer handleOpen={handleOpen} open={open} setOpen={setOpen} />
    </>
  );
};

export default NavBar;
