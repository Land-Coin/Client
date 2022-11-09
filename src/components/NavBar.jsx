import {
  AppBar,
  Box,
  
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

import { ConnectButton } from "@rainbow-me/rainbowkit";
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
            <Box sx={{ flex: 0.3 }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography color="white" fontWeight="bold">
                  LANDCOIN
                </Typography>
              </Link>
            </Box>
            <Box sx={{ flex: { xs: 0.7 } }}>
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
                    width: { md: "80%" },
                    justifyContent: "space-between",
                  }}
                >
                  <Link to="/list" style={{ textDecoration: "none" }}>
                    <Typography color="white" fontWeight="bold">
                      List Property
                    </Typography>
                  </Link>
                  <Link to="/search" style={{ textDecoration: "none" }}>
                    <Typography color="#fff" fontWeight="bold">
                      Search Propertry
                    </Typography>
                  </Link>
                  <Link to="/edit" style={{ textDecoration: "none" }}>
                    <Typography color="#fff" fontWeight="bold">
                      Edit Property
                    </Typography>
                  </Link>
                  <Link to="/account" style={{ textDecoration: "none" }}>
                    <Typography color="#fff" fontWeight="bold">
                      Accounts
                    </Typography>
                  </Link>

                  {/* <Typography>Edit Property</Typography> */}
                </Box>

                {/* <Button
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: "50px",
                    color: "#000",
                    "&:hover": { backgroundColor: "#fff" },
                  }}
                >
                  Connect Wallet
                </Button> */}
                <ConnectButton/>

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
