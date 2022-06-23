import { AppBar, Container, styled, Toolbar, Typography } from "@mui/material";
import React from "react";

// picture import
import logo from "../assets/FT9ja.png";

// icon import
import { FaRobot } from "react-icons/fa";

const NavContainer = styled(AppBar)`
  background: #1d4353;
  width: 100%;
  height: 10vh;
`;

const Logo = styled("div")`
  width: 90px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Label = styled("div")`
  background-color: #f77e27;
  color: white;
  font-size: 30px;
  display: flex;
  gap: 2px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Navbar = () => {
  return (
    <NavContainer position="static">
      <Toolbar>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Logo>
            <img src={logo} alt="Logo" />
          </Logo>
          <Label>
            <Typography sx={{ marginTop: "5px", fontWeight: "bold" }}>
              EquityBOT
            </Typography>
            <FaRobot />
          </Label>
        </Container>
      </Toolbar>
    </NavContainer>
  );
};

export default Navbar;
