import {
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <Container maxWidth="xl" sx={{}}>
      <Grid
        container
        sx={{
          minHeight: "100vh",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#1C1B2D !important",
                fontWeight: 700,
                fontSize: "52px",
                lineHeight: "63px",
              }}
            >
              Transparency and accountability of transactions...
            </Typography>
            <Typography
              sx={{
                color: "#1C1B2D",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "32px",
                mt: "5%",
              }}
            >
              This involves searching assets ,penalize the corrupt and reward
              those practicing integrity.
            </Typography>
            <Button sx={{ color: "#fff", bgcolor: "#1C1B2D" }}>About Us</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          test
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
