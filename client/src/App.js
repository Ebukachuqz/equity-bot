import "./App.css";
import { Container } from "@mui/material";

import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
};

export default App;
