import logo from "./logo.svg";
import "./App.css";
import { Box, Toolbar } from "@mui/material";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransactionsPage from "./components/Transactions/TransactionsPage";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <NavBar />
        <Toolbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
