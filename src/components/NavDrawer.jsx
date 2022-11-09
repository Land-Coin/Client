import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const NavDrawer = ({ open, setOpen }) => {
  return (
    <Drawer
      anchor="top"
      variant="temporary"
      open={open}
      onClick={() => setOpen(false)}
      PaperProps={{
        sx: {
          backgroundColor: "#1C1B2D",
          color: "#fff",
        },
      }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <IconButton>
          <CloseIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack spacing={4}>
          <Link to="/list" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography>List Property</Typography>
          </Link>
          <Link to="/search" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography>Search</Typography>
          </Link>
          <Link to="/edit" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography>Edit Property</Typography>
          </Link>
          <Link to="/account" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography>Accounts</Typography>
          </Link>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default NavDrawer;
