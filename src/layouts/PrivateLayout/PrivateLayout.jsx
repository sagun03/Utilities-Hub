import React from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "../Components/Navbar/index";
import styled from "styled-components";
import Footer from "../Components/Footer";

const Wrapper = styled.div({
  marginTop: "3.75rem",
  overflow: "hidden",
});

const PrivateLayout = ({ children }) => (
  <>
    <CssBaseline />
    <Navbar />
    <Wrapper>{children}</Wrapper>
    <Footer />
  </>
);

export default PrivateLayout;
