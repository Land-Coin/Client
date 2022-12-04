import { TextInput } from "@mantine/core";
import { Box, Container, Grid, Typography } from "@mui/material";
import React,  {useState} from "react";
import { CONTRACT } from "../../configs/appconfig";
import { CssTextField } from "../CustomTextBox";

const Search = () => {
  const [q, setQ] = useState("")
  const getProperty = () => {
    const wallet = window.walletConnection
    if(wallet){
      wallet.account().viewFunction(CONTRACT, "search_property", {query: q}).then(res => {
        console.log(res)
      }).catch(err => {
        console.error("Error: ", err)
      })
    }
  }

  return (
    <Box>
      <Container maxWidth="xl" sx={{ pb: "4%" }}>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "4%" }}>
          {" "}
          <Typography fontSize={{ xs: "18px", md: "32px" }}>
            Get the details of Property
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "2%" }}>
          {/* <CssTextField placeholder="Enter Title Deed Number" /> */}
          <TextInput placeholder="Enter Title Number" value={q} onChange={e => setQ(e.target.value)} />
        </Box>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            mt="4%"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>1. Title Deed Number :</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            mt="4%"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CssTextField placeholder="Title Deed Number" disabled />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            mt="4%"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>2. Title Type :</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            mt="4%"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CssTextField placeholder="Title Type" disabled />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            mt="4%"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>3. Title Use :</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            mt="4%"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CssTextField placeholder="Title Use" disabled />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            mt="4%"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>4. Size of the Land :</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            mt="4%"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CssTextField placeholder="Land size" disabled />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            mt="4%"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>5. Price of The Land :</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            mt="4%"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CssTextField placeholder="Price of The Land" disabled />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            mt="4%"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>6. Location Coordinates :</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            mt="4%"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CssTextField placeholder="Location Coordinates" disabled />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Search;
