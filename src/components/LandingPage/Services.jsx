import { Box, Container, Typography } from "@mui/material";

import React from "react";

const _items = [
  {
    title: "Secure Backup",
    subtitle:
      "Ensures secure backup of real estate documents approvals and payments. ",
    tyograph1:
      ". The user has full ownership of his/her data and is responsible for what he/she wants to make available to the public.",
    tyograph2:
      ". User is rewarded small LandCoin tokens upon adding his/her data onto the system.",
    tyograph3:
      ".  Some data such as payments are automatically recorded since such transactions can be done via this",
  },
  {
    title: "Search Validity",
    subtitle:
      "Allows users Search validity of a property at a much cheaper cost than current price.",
    tyograph1:
      ". Since real estate assets with their valide information has been verified and made available on this platform, other users can Search property by TitleNumber/LR number and confirm who owns it .",
    tyograph2:
      ". This prevents purchase of property from authorized persons or assets that have caveats.",
  },
  {
    title: "It's yours",
    subtitle: "Prevent loss of funds or ownership of assets .",
    tyograph1:
      ". LandCoin is built under No-trust policy, where the Buyer fails to trust that the Seller will transfer ownership to his/her Name while the Seller fails to trust the buyer to transfer the agreed funds to him/her.",
    tyograph2:
      ". Therefore, the system lets the buyer transfer funds to the Sellers wallet address .",
    tyograph3:
      ". The seller can see the funds have been transferred, but he/she can only receive it once he/she transfers ownership to the buyer.",
    tyograph4:
      ". This way ,incase of any disagreement,the funds can be reverted back to buyer while the ownership remains with the original Owner.",
  },
  {
    title: "Purchase from anywhere",
    subtitle:
      "Allow purchase of real estate assets from anywhere in the world using universal currency called LandCoin.",
    tyograph1:
      ". Take an example of someone with ksh wanting to purchase property in the United States , the two parties would have to convert the currency to their native currencies, of which some money would be spent on transaction and exchange cost, which can amount to some substantial amount of funds lost.",
    tyograph2:
      ". However, that amount could be saved by transferring LandCoins directly from one account address to another.",
  },
  {
    title: "Get rewarded",
    subtitle: "It takes a step of intergrity to do all these",
    tyograph1:
      ". Reward users for taking the integrity step of uploading and making their real estate assets’ data open to the public",
  },
  {
    title: "From your time",
    subtitle: "Just keep updating",
    tyograph1:
      ". We keep valide records of real estate assets as they  grow with time,such that their history can be easily retrieved  in future.",
  },
];
const Services = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(106.42deg, #1C1B2D -0.82%, #18162F 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "52px",
              lineHeight: "63px",
              color: "#fff",
              mt: "7%",
            }}
          >
            Our Services
          </Typography>
        </Box>

        {_items.map((e) => (
          <Box sx={{ background: "#868686", borderRadius: "10px", mb: "8%" }}>
            <Box
              sx={{
                background: "#474658",
                ml: "2%",
                borderRadius: "0px 10px 0px 0px",
                padding: "3%",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "36px",
                  lineHeight: "44px",
                  ml: "5%",
                }}
              >
                {e.title}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  ml: "5%",
                  color: "#BFBFBF",
                }}
              >
                {e.subtitle}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "16px",
                  ml: "5%",
                  color: "#BFBFBF",
                }}
              >
                {e.tyograph1}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "16px",
                  ml: "5%",
                  color: "#BFBFBF",
                }}
              >
                {e.tyograph2}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "16px",
                  ml: "5%",
                  color: "#BFBFBF",
                }}
              >
                {e.tyograph3}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "16px",
                  ml: "5%",
                  color: "#BFBFBF",
                }}
              >
                {e.tyograph4}
              </Typography>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Services;
