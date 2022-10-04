import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { CssTextField } from "../CustomTextBox";

const ListProperty = () => {
  return (
    <Box sx={{ backgroundColor: "#E4E6E6", pt: "7%", minHeight: "100vh" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography fontSize={{ xs: "16px", sm: "32px" }}>
            Add property to the system
          </Typography>
        </Box>
        <Grid container alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography fontSize="18px">
              1. Enter Type of Property :{" "}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <FormControl>
              <RadioGroup row defaultValue="female" name="radio-buttons-group">
                <FormControlLabel
                  value="land"
                  control={<Radio />}
                  label="Land"
                />
                <FormControlLabel
                  value="Building"
                  control={<Radio />}
                  label="Building"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography fontSize="18px">2. Enter Use of Property : </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <FormControl>
              <RadioGroup row defaultValue="female" name="radio-buttons-group">
                <FormControlLabel
                  value="sale"
                  control={<Radio />}
                  label="Sale"
                />
                <FormControlLabel
                  value="Rental"
                  control={<Radio />}
                  label="Rental"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography fontSize="18px">
              3. Enter Size in Hectares/ Acres:{" "}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <CssTextField placeholder="Enter size of land" />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography fontSize="18px">
              4. Enter Title Deed Number or Id:{" "}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <CssTextField placeholder="Enter Title Number or ID" />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography fontSize="18px">5. Enter Ownership: </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <CssTextField placeholder="Enter size owner of land" />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography fontSize="18px">6. Enter The Price: </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <CssTextField placeholder="Enter price of land" />
          </Grid>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Button
              sx={{
                color: "#fff",
                backgroundColor: "#1C1B2D",
                "&:hover": { backgroundColor: "#1C1B2D" },
                width: "100px",
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default ListProperty;
