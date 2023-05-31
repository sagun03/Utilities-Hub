import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import styled from "styled-components";
import logo from "../../../utils/img/logo.png";
import { styled as muiStyled } from "@mui/system";
import { useLocation } from "react-router-dom";

const NavBarContainer = styled.div({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
});

const Logo = styled.img({
  width: "100%",
  maxWidth: "100%",
  height: "auto",
});

const LogoWrapper = styled.div({
  width: "14rem",
  marginRight: "2rem",
  marginTop: "0.3rem",
});

const ButtonWrapper = styled.div({
  justifyContent: "flex-start",
  width: "auto",
  textAlign: "left",
  display: "flex",
  flex: "1 1",
});

const MenuWrapper = styled.div({
  justifyContent: "flex-end",
  display: "flex",
});

const CustomButton = muiStyled(Button)((props) => ({
  color: props?.selected ? "#1976d2" : "black",
  marginRight: "1rem",
  fontSize: "0.75rem",
}));

const CustomMenuButton = muiStyled(Button)((props) => ({
  color: props?.login ? "black" : "white",
  fontSize: "0.75rem",
  background: props?.login ? "#f3f0ec" : "#1976d2",
  paddingLeft: "16px",
  paddingRight: "16px",
  height: "100%",
  borderRadius: "0px",
  fontWeight: props?.login ? "400" : "700",
  "&:hover": {
    backgroundColor: "#383e45",
    color: "#fff",
    fontWeight: "700",
  },
}));

const Navbar = () => {
  const handleClick = () => {
    localStorage.removeItem("Token");
  };
  let location = useLocation();
  return (
    <NavBarContainer>
      <AppBar position="fixed" sx={{ background: "#fff", height: "3rem" }}>
        <Toolbar sx={{ background: "#fff", minHeight: "3rem !important" }}>
          <LogoWrapper>
            <Link to="/home">
              <Logo src={logo} alt="logo" />
            </Link>
          </LogoWrapper>
          <ButtonWrapper>
            <Link to="/password-generator">
              <CustomButton
                selected={location.pathname === "/password-generator"}
                size="small"
                disableFocusRipple
                disableRipple
              >
                Password Generator
              </CustomButton>
            </Link>

            <Link to="/bmi-calculator">
              {" "}
              <CustomButton
                selected={location.pathname === "/bmi-calculator"}
                size="small"
                disableFocusRipple
                disableRipple
              >
                Fitness & Health Calculator
              </CustomButton>
            </Link>

            <Link to="/currency-converter">
              <CustomButton
                selected={location.pathname === "/currency-converter"}
                size="small"
                disableFocusRipple
                disableRipple
              >
                Currency Converter
              </CustomButton>
            </Link>

            <Link to="/image-compressor">
              <CustomButton
                selected={location.pathname === "/image-compressor"}
                size="small"
                disableFocusRipple
                disableRipple
              >
                Image Compressor
              </CustomButton>
            </Link>
          </ButtonWrapper>
          <MenuWrapper>
            <Link to="/login" onClick={() => handleClick()}>
              <CustomMenuButton login size="small" disableRipple>
                Log In
              </CustomMenuButton>
            </Link>
            <Link to="/sign-up" onClick={() => handleClick()}>
              <CustomMenuButton size="small" disableRipple>
                {" "}
                Sign Up
              </CustomMenuButton>
            </Link>
          </MenuWrapper>
        </Toolbar>
      </AppBar>
    </NavBarContainer>
  );
};

export default Navbar;
