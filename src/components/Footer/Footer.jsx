import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: " #1C1B2D ",
        height: "20%",
      }}
    >
      <Container maxWidth="xl" sx={{ pt: "4%", pb: "4%" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography color="#fff" fontWeight="bold" fontSize="20px">
              LANDCOIN
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Stack color="#fff">
              <Typography fontWeight="bold">Quick Links</Typography>
              <Typography>Transact</Typography>
              <Typography>List Property</Typography>
              <Typography>Search</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack>
              <IconButton>
                <TwitterIcon sx={{ color: "#fff" }} />
              </IconButton>
              <IconButton>
                <EmailIcon sx={{ color: "#fff" }} />
              </IconButton>
              <IconButton>
                <TelegramIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
