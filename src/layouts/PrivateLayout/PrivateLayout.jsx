import React from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "../Components/Navbar/index";
import styled from "styled-components";

const Wrapper = styled.div({
  marginTop: "3.75rem",
  overflow: "hidden",
});

const PrivateLayout = ({ children }) => (
  <>
    <CssBaseline />
    <Navbar />
    <Wrapper>{children}</Wrapper>
  </>
);

export default PrivateLayout;
