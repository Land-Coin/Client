// import logo from "./logo.svg";
import "./App.css";
import { Box, Toolbar } from "@mui/material";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import TransactionsPage from "./components/Transactions/TransactionsPage";
// import History from "./components/TransactionTable/History";
import ListProperty from "./components/ListProperty/ListProperty";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";
import Property from "./components/Property";

import { Center, Title } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import ListPropertyOne from "./components/ListProperty/ListPropertyOne";
import EditProperty from "./components/ListProperty/EditProperty";
import Account from "./components/account/Account";
import Trades from "./components/account/trades/Trades";
import SingleTrade from "./components/account/trades/SingleTrade";

function App() {
  return (
    <ModalsProvider>
      <BrowserRouter>
        <Box>
          <NavBar />
          <Toolbar sx={{ backgroundColor: "#E4E6E6" }} />
          <div style={{ minHeight: "100vh" }}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              {/* <Route path="/transactions" element={<TransactionsPage />} /> */}
              {/* <Route path="/history" element={<History />} /> */}
              <Route path="/sx" element={<Property />} />
              <Route path="/sy" element={<ListPropertyOne />} />
              <Route path="/sd" element={<EditProperty />} />
              <Route path="/listproperty" element={<ListProperty />} />
              <Route path="/search" element={<Search />} />
              <Route path="account/" element={<Account />}>
                <Route path="trades" element={<Trades />}>
                  <Route path="" element={<Center style={{height: "100%"}} ><Title order={3}>Select Trade To Continue</Title></Center>} />
                  <Route path=":id" element={<SingleTrade />} />
                  <Route path="*" element={<Center style={{height: "100%"}} ><Title order={3}>Select Trade To Continue</Title></Center>} />
                </Route>
                <Route path="rent">
                  <Route path=":id" element={<h1>single trade</h1>} />
                </Route>
              </Route>
            </Routes>
          </div>
          <Footer />
        </Box>
      </BrowserRouter>
    </ModalsProvider>
  );
}

export default App;
