import React from "react";
import { CssBaseline } from "@mui/material";
import Footer from "../Components/Footer";

const AuthLayout = ({ children }) => (
  <>
    <CssBaseline />
    <div>{children}</div>
    <Footer />
  </>
);
export default AuthLayout;
