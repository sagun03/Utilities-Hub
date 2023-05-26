/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { styled as muiStyled } from "@mui/system";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
// import FormControlLabel from "@mui/material/FormControlLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
// import Button from "@mui/material/Button";
import Alert from "../components/Alert";
// import InputBase from "@mui/material/InputBase";
// import Divider from "@mui/material/Divider";
// import Paper from "@mui/material/Paper";
// import FileCopyIcon from "@mui/icons-material/FileCopy";
// import NativeSelect from "@mui/material/NativeSelect";
// import MenuItem from "@mui/material/MenuItem";

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  background: "#F3F0EC",
  padding: ".5rem",
});

const CustomTypoGraphy = muiStyled(Typography)((props) => ({
  textAlign: "center",
  marginLeft: "auto",
  marginRight: "auto",
  color: "#383e45",
  paddingTop: props.variant === "h6" ? "0rem" : "1rem",
  paddingBottom: props.variant === "h6" ? "1rem" : "2rem",
  fontWeight: props.variant === "subtitle1" ? "500" : "600",
  marginBottom: ".5rem",
}));

const Form = styled.form({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "4rem",
  paddingBottom: "1rem",
});

const Content = styled.div({
  width: "100%",
  margin: "2 6rem",
  paddingLeft: "1rem",
  overflow: "hidden",
});

const ContentWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Container = styled.div({
  maxWidth: "100%",
  background: "#fff",
  boxShadow: "0 15px 16.83px 0.17px rgba(0,0,0,.05)",
  "-moz-box-shadow": "0 15px 16.83px .17px rgba(0,0,0,.05)",
  "-webkit-box-shadow": "0 15px 16.83px 0.17px rgba(0,0,0,.05)",
  "-o-box-shadow": "0 15px 16.83px .17px rgba(0,0,0,.05)",
  "-ms-box-shadow": "0 15px 16.83px .17px rgba(0,0,0,.05)",
  borderRadius: "20px",
  " -moz-border-radius": "20px",
  "-webkit-border-radius": "20px",
  "-o-border-radius": "20px",
  "-ms-border-radius": "20px",
  padding: "2rem 0",
  margin: "3rem 10rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const PxToRem = () => {
  const [pixels, setPixels] = useState(0);
  const [rem, setRem] = useState(0);
  const [baseValue, setBaseValue] = useState(16);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const convertPxToRem = (value, fromUnit, toUnit) => {
    if (fromUnit === "px" && toUnit === "rem") {
      const remValue = value / baseValue;
      setPixels(value);
      setRem(remValue % 1 !== 0 ? remValue.toFixed(3) : remValue);
    } else if (fromUnit === "rem" && toUnit === "px") {
      const pixelValue = value * baseValue;
      setRem(value);
      setPixels(pixelValue % 1 !== 0 ? pixelValue.toFixed(3) : pixelValue);
    }
  };

  useEffect(() => {
    if (baseValue) {
      convertPxToRem(pixels, "px", "rem");
    }
  }, [baseValue, convertPxToRem]);

  return (
    <Wrapper>
      <Container>
        <Content>
          <CustomTypoGraphy variant="h4">PX to REM Converter</CustomTypoGraphy>
          <Form>
            <ContentWrapper>
              {" "}
              <CustomTypoGraphy variant="h6">Pixels</CustomTypoGraphy>
              <OutlinedInput
                id="outlined-adornment-pixels"
                type="number"
                value={pixels}
                endAdornment={
                  <InputAdornment position="end">px</InputAdornment>
                }
                onChange={(e) => convertPxToRem(e.target.value, "px", "rem")}
                aria-describedby="outlined-pixels-helper-text"
                inputProps={{
                  "aria-label": "pixels",
                }}
              />
            </ContentWrapper>
            <ContentWrapper>
              {" "}
              <CustomTypoGraphy variant="h6">Rem</CustomTypoGraphy>
              <OutlinedInput
                value={rem}
                id="outlined-adornment-rem"
                type="number"
                onChange={(e) => convertPxToRem(e.target.value, "rem", "px")}
                endAdornment={
                  <InputAdornment position="end">rem</InputAdornment>
                }
                aria-describedby="outlined-rem-helper-text"
                inputProps={{
                  "aria-label": "rem",
                }}
              />
            </ContentWrapper>
          </Form>
          <CustomTypoGraphy variant="subtitle1">
            Calculation based on a root font-size of {"  "}
            <TextField
              id="baseValue"
              type="number"
              sx={{
                marginLeft: "3px",
                marginRight: "6px",
                input: { textAlign: "center", padding: "2px" },
              }}
              InputProps={{
                inputProps: { min: 0, max: 100 },
              }}
              value={baseValue}
              onChange={(e) => setBaseValue(e.target.value)}
            />
            px.
          </CustomTypoGraphy>
        </Content>
      </Container>
      {Boolean(error) && (
        <Alert
          open={Boolean(error)}
          type={"error"}
          message={error}
          setOpen={setError}
        />
      )}
    </Wrapper>
  );
};

export default PxToRem;
