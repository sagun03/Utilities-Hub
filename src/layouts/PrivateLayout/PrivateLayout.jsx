import React from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "../Components/Navbar/index";
import styled from "styled-components";

const Wrapper = styled.div({
  padding: "30px",
});
const PrivateLayout = ({ children }) => (
  <>
    <CssBaseline />
    <Navbar />
    <Wrapper>{children}</Wrapper>
  </>
);

export default PrivateLayout;
