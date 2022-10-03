import logo from "./logo.svg";
import "./App.css";
import { Box, Toolbar } from "@mui/material";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransactionsPage from "./components/Transactions/TransactionsPage";
import History from "./components/PropertyHistory/History";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <NavBar />
        <Toolbar sx={{ backgroundColor: "#E4E6E6" }} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
