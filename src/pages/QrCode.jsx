import { useState, useRef, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import styled from "styled-components";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import Alert from "../components/Alert";
import { styled as muiStyled } from "@mui/system";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  background: "#F3F0EC",
  padding: ".5rem",
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

const Content = styled.div({
  width: "100%",
  overflow: "hidden",
});

const Form = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
  paddingBottom: "1rem",
});

const QrCodeWrapper = styled.div({
  display: "flex",
});

const QrCode = () => {
  const [url, setUrl] = useState("");
  const qrRef = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const downloadQRCode = (e) => {
    e.preventDefault();
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2500);
  };
  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas id="qrCode" value={url} size={200} level={"H"} />
  );

  return (
    <Wrapper>
      <Container>
        <Content>
          <CustomTypoGraphy variant="h4">Qr Code Generator</CustomTypoGraphy>
          <Form>
            <QrCodeWrapper ref={qrRef}>{qrcode}</QrCodeWrapper>
            <TextField
              type="text"
              value={url}
              onChange={qrCodeEncoder}
              placeholder="try me"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {<QrCodeScannerIcon />}
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              sx={{ input: { width: "20rem" }, mt: 2 }}
            />
            <Button
              variant="contained"
              disabled={!url}
              onClick={(e) => downloadQRCode(e)}
            >
              Download QR code
            </Button>
          </Form>
        </Content>
      </Container>
      {Boolean(open) && (
        <Alert
          open={Boolean(open)}
          type={"info"}
          message={"Qr Code has been downloaded"}
          setOpen={setOpen}
        />
      )}
    </Wrapper>
  );
};

export default QrCode;
