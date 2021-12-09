import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import theme from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import FlipCard from "./components/FlipCard";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </div>
  );
}

export default App;
