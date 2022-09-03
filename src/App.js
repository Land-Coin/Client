import logo from "./logo.svg";
import "./App.css";
import { Box, Toolbar } from "@mui/material";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Box>
      <NavBar />
      <Toolbar />
      <LandingPage />
    </Box>
  );
}

export default App;
