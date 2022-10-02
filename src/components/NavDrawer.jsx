import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

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
          <Typography>Transact</Typography>
          <Typography>List Property</Typography>
          <Typography>Search</Typography>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default NavDrawer;
