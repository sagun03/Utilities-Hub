import { MailOutline, Phone, Room, WhatsApp } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { config } from "../../../utils/config";
import { v4 as uuidv4 } from "uuid";
import Typography from "@mui/material/Typography";

const Cointainer = styled.div`
  display: flex;
  background-color: #fafafa;
  padding-top: 30px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h2`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  a {
    text-decoration: none;
    color: black;

    &:hover {
      color: #1976d2;
    }
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialCointainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  svg {
    color: white;
    margin-top: 5px;
  }
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  word-wrap: break-word;
`;

const Payment = styled.img`
  width: 50%;
`;

const FooterContainer = styled.div({
  height: "60px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  color: "#1976d2",
  justifyContent: "center",
});

const Footer = () => {
  return (
    <>
      <Cointainer>
        <Left>
          <Logo>Utilities Hub </Logo>
          <Desc>
            Join Utilities Hub today and simplify your utility management.
          </Desc>
          <SocialCointainer>
            <SocialIcon color="25D366">
              <a
                href={`https://wa.me/919560363492?text=${encodeURIComponent(
                  `Hi I Visited your side`
                )}`}
              >
                <WhatsApp />
              </a>
            </SocialIcon>
          </SocialCointainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>
              <Link to="/home">Home </Link>
            </ListItem>
            {config.map(({ title, path }) => (
              <ListItem key={uuidv4()}>
                <Link to={path}>{title}</Link>
              </ListItem>
            ))}
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} />
            Noida, UP, India
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> +91 8755447070
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} />{" "}
            sagunsaluja13@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Cointainer>
      <FooterContainer>
        <Typography variant="title" sx={{ fontSize: "16px" }}>
          Developed and Managed © Sagun Saluja
        </Typography>
      </FooterContainer>
    </>
  );
};

export default Footer;

// import Typography from "@mui/material/Typography";
// import styled from "styled-components";

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <Typography variant="title" sx={{ fontSize: "17px" }}>
//         CopyRight © Sagun Saluja
//       </Typography>
//     </FooterContainer>
//   );
// };

// export default Footer;
