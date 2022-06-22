import { Container, styled } from "@mui/material";
import React from "react";

const Containerr = styled("div")`
  position: relative;
  height: 10vh;
  background-color: #f77e27;
  opacity: 0.8;
  color: white;
  overflow: hidden;
  text-align: center;
  font-size: 18px;
  padding: 15px;
  font-weight: bold;
`;

const Footer = () => {
  return <Containerr>&copy; Created By Ebuka Chuqz</Containerr>;
};

export default Footer;
