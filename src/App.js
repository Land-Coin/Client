// import logo from "./logo.svg";
import "./App.css";
import { Box, Toolbar } from "@mui/material";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";
import Property from "./components/Property";

import { Center, Title } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import ListPropertyOne from "./components/ListProperty/ListPropertyOne";
import EditProperty from "./components/ListProperty/EditProperty";
import Account from "./components/account/Account";
import BuysMade from "./components/account/BuysMade/BuysMade";
import SingleTrade from "./components/account/BuysMade/SingleTrade";
//rewinbow
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

//configs
const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum, chain.goerli],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);
//connectors
const { connectors } = getDefaultWallets({
  appName: " Thee Landcoin",
  chains,
});


const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  return (
    <ModalsProvider>
      <BrowserRouter>
      <WagmiConfig  client={wagmiClient}>
        <RainbowKitProvider chains={chains} >
        <Box>
          <NavBar />
          <Toolbar sx={{ backgroundColor: "#E4E6E6" }} />
          <div style={{ minHeight: "100vh" }}>
            <Routes>
              <Route path="/" element={<LandingPage />} />

              <Route path="/search" element={<Property />} />
              <Route path="/list" element={<ListPropertyOne />} />
              <Route path="/edit" element={<EditProperty />} />

              {/* <Route path="/search" element={<Search />} /> */}
              <Route path="account/" element={<Account />}>
                <Route path="BuysMade" element={<BuysMade />}>
                  <Route
                    path=""
                    element={
                      <Center style={{ height: "100%" }}>
                        <Title order={3}>Select Trade To Continue</Title>
                      </Center>
                    }
                  />
                  <Route path=":id" element={<SingleTrade />} />
                  <Route
                    path="*"
                    element={
                      <Center style={{ height: "100%" }}>
                        <Title order={3}>Select Trade To Continue</Title>
                      </Center>
                    }
                  />
                </Route>
                <Route path="rent">
                  <Route path=":id" element={<h1>single trade</h1>} />
                </Route>
              </Route>
            </Routes>
          </div>
          <Footer />
        </Box>
        </RainbowKitProvider>
        </WagmiConfig>
      </BrowserRouter>
    </ModalsProvider>
  );
}

export default App;
