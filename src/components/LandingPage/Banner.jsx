import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import banner from "../../Assets/Group.svg";

const Banner = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(106.42deg, #E2E7E6 -0.82%, #ECE5E6 100%)",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          sx={{
            height: "100vh",
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
                  fontSize: "clamp(2rem, 6vw,4rem)",
                  lineHeight: "63px",
                }}
              >
                Transparency and accountability of transactions...
              </Typography>
              <Box sx={{ width: "70%" }}>
                <Typography
                  sx={{
                    color: "#1C1B2D",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "32px",
                    mt: "5%",
                  }}
                >
                  This involves searching assets ,penalize the corrupt and
                  reward those practicing integrity.
                </Typography>
              </Box>
              <Button
                sx={{
                  color: "#fff",
                  bgcolor: "#1C1B2D",
                  mt: "7%",
                  borderRadius: "50px",
                  width: "210px",
                }}
              >
                About Us
              </Button>
            </Box>
          </Grid>
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
            <Box sx={{}}>
              <img src={banner} style={{ width: "100%" }} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
