import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { CssTextField } from "../CustomTextBox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const TransactionsPage = () => {
  return (
    <Container maxWidth="md">
      <Grid container mt="4%" alignItems="center">
        <Grid item md={6}>
          <Typography fontWeight="bold">Sender's Wallet :</Typography>
        </Grid>
        <Grid item md={6}>
          <CssTextField
            sx={{ width: { xs: "100%" } }}
            placeholder="Enter address"
          />
        </Grid>
      </Grid>
      <Grid container mt="4%" alignItems="center">
        <Grid item md={6}>
          <Typography fontWeight="bold">Receiver's Wallet :</Typography>
        </Grid>
        <Grid item md={6}>
          <CssTextField
            sx={{ width: { xs: "100%" } }}
            placeholder="Enter address"
          />
        </Grid>
      </Grid>{" "}
      <Grid container mt="4%" alignItems="center">
        <Grid item md={6}>
          <Typography fontWeight="bold">Amount :</Typography>
        </Grid>
        <Grid item md={6}>
          <CssTextField
            sx={{ width: { xs: "100%" } }}
            placeholder="Enter Amount"
          />
        </Grid>
      </Grid>
      <Grid container mt="4%" alignItems="center">
        <Grid item xs={12}>
          <Typography fontWeight="bold">Transaction Type :</Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Stack>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Buy"
                    control={<Radio />}
                    label="Buy"
                  />
                  <FormControlLabel
                    value="Rent"
                    control={<Radio />}
                    label="Rent"
                  />
                  <FormControlLabel
                    value="Transfer Ownership"
                    control={<Radio />}
                    label="Transfer Ownership"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
            <Stack>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Sell"
                    control={<Radio />}
                    label="Sell"
                  />
                  <FormControlLabel
                    value="Subdivide"
                    control={<Radio />}
                    label="Subdivide"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} mt="4%">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Typography fontWeight="bold">Caveat :</Typography>
            <Button
              sx={{
                backgroundColor: "#1C1B2D",
                "&:hover": { backgroundColor: "#1C1B2D" },
                color: "#fff",
              }}
            >
              Add
            </Button>
            <Button
              sx={{
                backgroundColor: "red",
                "&:hover": { backgroundColor: "red" },
                color: "#fff",
              }}
            >
              Remove
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} mt="6%">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#1C1B2D",
                "&:hover": { backgroundColor: "#1C1B2D" },
                color: "#fff",
              }}
            >
              Complete Transaction
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TransactionsPage;
