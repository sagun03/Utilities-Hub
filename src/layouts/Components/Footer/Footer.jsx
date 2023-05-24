import Typography from "@mui/material/Typography";
import styled from "styled-components";

const FooterContainer = styled.div({
  height: "100px",
  paddingTop: "35px",
  textAlign: "center",
});

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="title" sx={{ fontSize: "17px" }}>
        CopyRight © Sagun Saluja
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
