import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { styled as muiStyled } from "@mui/system";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import NumbersIcon from "@mui/icons-material/Numbers";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Alert from "../components/Alert";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
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
  paddingTop: "1rem",
  paddingBottom: "2rem",
  fontWeight: "600",
  marginBottom: ".5rem",
}));

const Form = styled.form({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
});

const Content = styled.div({
  width: "100%",
  margin: "0rem 6rem 2rem",
  overflow: "hidden",
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

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeUppercase, setUppercase] = useState(true);
  const [includeLowercase, setLowercase] = useState(true);
  const [error, setError] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setPassword("");
  }, [includeNumbers, includeSymbols, includeLowercase, includeUppercase]);
  const random = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };

  const randomLower = () => {
    return String.fromCharCode(random(97, 122));
  };

  const randomUpper = () => {
    return String.fromCharCode(random(65, 90));
  };

  const randomSymbol = () => {
    const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>";
    return symbols[random(0, symbols.length - 1)];
  };

  const generatePassword = (e) => {
    if (
      !includeUppercase &&
      !includeLowercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      return setError("At least one character type must be selected");
    }

    let password = "";
    let validate = [];
    for (let i = 0; i < passwordLength; i++) {
      let choice = random(0, 3);
      validate.push(choice);
      validate = [...new Set(validate)];
      if (i === passwordLength - 1 && validate?.length !== 4) {
        if (validate.length === 3) {
          const expectedSum = 6;
          const actualSum = validate?.reduce((sum, num) => sum + num, 0);
          const leftChoice = expectedSum - actualSum;
          if (leftChoice >= 0) {
            choice = leftChoice;
          }
        }
      }
      if (includeLowercase && choice === 0) {
        password += randomLower();
      } else if (includeUppercase && choice === 1) {
        password += randomUpper();
      } else if (includeSymbols && choice === 2) {
        password += randomSymbol();
      } else if (includeNumbers && choice === 3) {
        password += random(0, 9);
      } else {
        i--;
      }
    }
    setPassword(password);
  };

  const getHelperText = (passwordLength) => {
    if (!passwordLength || passwordLength < 8) {
      return "Password length should not be less than 8";
    } else if (passwordLength > 20) {
      return "Password length should not be more than 20";
    }
  };

  const copyTextToClipboard = async (text) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(password)
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

  return (
    <Wrapper>
      <Container>
        <Content>
          <CustomTypoGraphy variant="h4">Password Generator</CustomTypoGraphy>
          <Form onSubmit={generatePassword}>
            <TextField
              id="input-with-icon-textfield"
              placeholder="Password Length"
              label="Length"
              type="number"
              min="6"
              value={passwordLength}
              onChange={(e) => setPasswordLength(parseInt(e.target.value))}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <NumbersIcon />
                  </InputAdornment>
                ),
              }}
              error={
                !passwordLength || passwordLength < 8 || passwordLength > 20
              }
              variant="outlined"
              helperText={getHelperText(passwordLength)}
              sx={{ marginBottom: "1rem" }}
            />
            <FormControlLabel
              checked={includeUppercase}
              sx={{
                display: "flex",
                width: "40%",
                justifyContent: "space-between",
                marginLeft: "0rem",
              }}
              control={
                <Checkbox onChange={(e) => setUppercase(e.target.checked)} />
              }
              label="Include One UpperCase:"
              labelPlacement="start"
            />
            <FormControlLabel
              checked={includeLowercase}
              sx={{
                display: "flex",
                width: "40%",
                justifyContent: "space-between",
                marginLeft: "0rem",
              }}
              control={
                <Checkbox onChange={(e) => setLowercase(e.target.checked)} />
              }
              label="Include One LoweCase:"
              labelPlacement="start"
            />

            <FormControlLabel
              checked={includeNumbers}
              sx={{
                display: "flex",
                width: "40%",
                justifyContent: "space-between",
                marginLeft: "0rem",
              }}
              control={
                <Checkbox
                  onChange={(e) => setIncludeNumbers(e.target.checked)}
                />
              }
              label="Include Numbers:"
              labelPlacement="start"
            />
            <FormControlLabel
              checked={includeSymbols}
              sx={{
                display: "flex",
                width: "40%",
                justifyContent: "space-between",
                marginLeft: "0rem",
              }}
              control={
                <Checkbox
                  onChange={(e) => setIncludeSymbols(e.target.checked)}
                />
              }
              label="Include Symbols:"
              labelPlacement="start"
            />
            <Button
              variant="contained"
              onClick={() => generatePassword()}
              disabled={
                !passwordLength || passwordLength < 8 || passwordLength > 20
              }
            >
              Generate Password
            </Button>
          </Form>
        </Content>
        {/* <ImageContainer>
            <Image src={pg} alt="pg image" />
          </ImageContainer> */}
        {Boolean(password) && (
          <>
            Your Password Is:
            <Paper
              component="form"
              sx={{
                m: "5px",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 330,
              }}
            >
              <InputBase sx={{ ml: 1, flex: 1 }} value={password} readOnly />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <Button
                color="primary"
                sx={{ p: "10px" }}
                startIcon={<FileCopyIcon />}
                onClick={() => handleCopyClick()}
              >
                {isCopied ? "Copied!" : "Copy"}
              </Button>
            </Paper>
          </>
        )}
      </Container>
      {Boolean(error) && (
        <Alert
          open={Boolean(error)}
          type={"error"}
          message={error}
          setOpen={setError}
        />
      )}
      {Boolean(isCopied) && (
        <Alert
          open={isCopied}
          type={"info"}
          message={"Password has been copied to Clipboard"}
          setOpen={setIsCopied}
        />
      )}
    </Wrapper>
  );
};

export default PasswordGenerator;
