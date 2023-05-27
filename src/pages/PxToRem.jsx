/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { styled as muiStyled } from "@mui/system";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import Alert from "../components/Alert";
import Divider from "@mui/material/Divider";
import FileCopyIcon from "@mui/icons-material/FileCopy";

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
  paddingBottom:
    props.variant === "h6" || props.variant === "subtitle1" ? "1rem" : "2rem",
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

const StyleWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: "5rem",
  marginLeft: "2rem",
  marginTop: "-1rem",
});

const StyleContent = styled.div((props) => ({
  borderRadius: "4px",
  position: "relative",
  padding: "1.25rem 1.5rem 1.25rem 1.5rem",
  backgroundColor: props.backgroundColor,
  color: props.color,
}));
const PxToRem = () => {
  const [pixels, setPixels] = useState(0);
  const [rem, setRem] = useState(0);
  const [baseValue, setBaseValue] = useState(16);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyTextToClipboard = async (text) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };
  const handleCopyClick = (type) => {
    // Asynchronously call copyTextToClipboard
    const value = type === "px" ? `${pixels}px` : `${rem}rem`;
    copyTextToClipboard(value)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                sx={{ input: { width: "5rem" } }}
                value={pixels}
                endAdornment={
                  <InputAdornment position="end">
                    px{" "}
                    <Divider sx={{ height: 28, m: 1 }} orientation="vertical" />
                    <Button
                      color="primary"
                      sx={{ p: "5px", fontSize: "12px" }}
                      startIcon={<FileCopyIcon style={{ fontSize: "16px" }} />}
                      onClick={() => handleCopyClick("px")}
                    >
                      Copy
                    </Button>
                  </InputAdornment>
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
                sx={{ input: { width: "5rem" } }}
                id="outlined-adornment-rem"
                type="number"
                onChange={(e) => convertPxToRem(e.target.value, "rem", "px")}
                endAdornment={
                  <InputAdornment position="end">
                    rem{" "}
                    <Divider sx={{ height: 28, m: 1 }} orientation="vertical" />
                    <Button
                      color="primary"
                      sx={{ p: "5px", fontSize: "12px" }}
                      startIcon={<FileCopyIcon style={{ fontSize: "16px" }} />}
                      onClick={() => handleCopyClick("rem")}
                    >
                      Copy
                    </Button>
                  </InputAdornment>
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
          <CustomTypoGraphy variant="h6">CSS Styles</CustomTypoGraphy>
          <StyleWrapper>
            <ContentWrapper>
              {" "}
              <CustomTypoGraphy variant="subtitle1">Pixel</CustomTypoGraphy>
              <StyleContent
                color="#2E8547"
                backgroundColor="#EDFAF1"
                dangerouslySetInnerHTML={{
                  __html: `h2 &nbsp; { <br> &nbsp;
                    &nbsp;
                    font-size: ${pixels}px;  <br> &nbsp; }`,
                }}
              />
            </ContentWrapper>
            <ContentWrapper>
              {" "}
              <CustomTypoGraphy variant="subtitle1">Rem</CustomTypoGraphy>
              <StyleContent
                backgroundColor="#EFF5FB"
                color="#3A83C8"
                dangerouslySetInnerHTML={{
                  __html: `h2 &nbsp; { <br> &nbsp;
                    &nbsp;
                    font-size: ${rem}rem;  <br> &nbsp; }`,
                }}
              />
            </ContentWrapper>
          </StyleWrapper>
        </Content>
      </Container>
      {Boolean(isCopied) && (
        <Alert
          open={isCopied}
          type={"info"}
          message={"Value has been copied to Clipboard"}
          setOpen={setIsCopied}
        />
      )}
    </Wrapper>
  );
};

export default PxToRem;
