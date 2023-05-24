import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import styled from "styled-components";
import logo from "../../../utils/img/logo.png";

const NavBarContainer = styled.div({
  flexGrow: 1,
  fontSize: "15px",
});

const Logo = styled.img({
  width: "100%",
  maxWidth: "100%",
  height: "auto",
});

const LogoWrapper = styled.div({
  width: "14rem",
  marginRight: "2rem",
});

const Navbar = () => {
  const handleClick = () => {
    localStorage.removeItem("Token");
  };
  return (
    <NavBarContainer>
      <AppBar position="fixed" sx={{ background: "#fff", height: "3.75rem" }}>
        <Toolbar>
          <LogoWrapper>
            <Link to="/home">
              <Logo src={logo} alt="logo" />
            </Link>
          </LogoWrapper>

          <Link to="/trainee">
            <Button sx={{ color: "black" }}>TRAINEE</Button>
          </Link>

          <Link to="/textfield-demo">
            {" "}
            <Button sx={{ color: "black" }}>TEXTFIELD DEMO </Button>
          </Link>

          <Link to="/input-demo">
            <Button sx={{ color: "black" }}>INPUT DEMO</Button>
          </Link>

          <Link to="/children-demo">
            <Button sx={{ color: "black" }}>CHILDREN DEMO</Button>
          </Link>

          <Link to="/login" onClick={() => handleClick()}>
            <Button sx={{ color: "black" }}> LogOut</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </NavBarContainer>
  );
};

export default Navbar;
