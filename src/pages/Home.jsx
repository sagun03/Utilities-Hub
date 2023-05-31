/* eslint-disable no-dupe-keys */
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { styled as muiStyled } from "@mui/system";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { config } from "../utils/config";
import { useEffect } from "react";
import wawe from "../utils/img/wawe.png";

const HomeTitle = styled.div({
  position: "relative",
  textAlign: "center",
  background: "lightgrey",
  padding: "1.5rem 1.5rem 8.25rem",
  backgroundColor: "#21D4FD",
  backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
});

const getColor = (variant) => {
  switch (variant) {
    case "h6":
      return "#383e45";
    case "subtitle1":
      return "#626870";
    default:
      return "#fff";
  }
};
const getFontSize = (variant) => {
  // eslint-disable-next-line default-case
  switch (variant) {
    case "h5":
      return "1.25rem";
    case "subtitle1":
      return "0.75rem";
  }
};
const CustomTypoGraphy = muiStyled(Typography)((props) => ({
  textAlign:
    props?.variant === "h6" || props?.variant === "subtitle1"
      ? "flex-start"
      : "center",
  marginRight: "auto",
  marginLeft: props?.variant === "h5" && "auto",
  color: getColor(props.variant),
  maxWidth: props?.variant === "h5" && "60rem",
  paddingTop: props?.variant === "h4" && "1rem",
  paddingBottom: props?.variant === "h4" && "1rem",
  fontWeight: props?.variant === "h6" && "600",
  marginBottom: props?.variant === "h6" && ".5rem",
  fontSize: getFontSize(props.variant),
  lineHeight: props?.variant === "subtitle1" && "1.5",
}));

const ToolsWrapper = styled.div({
  padding: "0 2rem 2rem",
  display: "flex",
  marginTop: "1rem",
  marginBottom: "1rem",
  alignItems: "center",
  justifyContent: "flex-start",
  position: "relative",
  flexWrap: "wrap",
  background: "#fff",

  // background: "#F3F0EC",
});

const ToolsContainer = styled.div({
  background: "#fff",
  display: "flex",
  position: "relative",
  flexWrap: "wrap",
  boxShadow: "0 20px 10px 0 rgba(0,0,0,.1)",
  width: "100%",
});

const ToolsItem = styled.div({
  fontSize: "2.25rem",
  color: "#383e45",
  position: "relative",
  flexWrap: "wrap",
  transition: "all .4s ease-out",
  zIndex: "1",
  overflow: "hidden",
  flex: "0 0 25%",
  // borderRight: "1px solid #f6f6f8",
  // borderBottom: "1px solid #f6f6f8",
  "&:hover": {
    zIndex: "999",
    background: "#f6f6f8",
    svg: {
      "-webkit-transform": "scale(1.1)",
      transform: "scale(1.1)",
    },
  },
  a: {
    padding: "1.5rem",
    display: "block",
    width: "100%",
    height: "100%",
    color: "#383e45",
    position: "relative",
    zIndex: "2",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
  },
});

const ToolsItemIcon = styled.div({
  display: "flex",
  justifyContent: "flex-start",
  marginBottom: "1rem",

  svg: {
    width: "2.6rem",
    transition: "all .4s ease-out",
    height: "2.6rem",
  },
});

const ImageWrapper = styled.div({
  bottom: "-4rem",
  position: "absolute",
  right: 0,
  left: 0,
  width: "100%",
  zIndex: 0,
});

const Image = styled.img({
  width: "100%",
  height: "auto",
  display: "block",
  float: "left",
  transform: "rotate(3deg)",
});

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HomeTitle>
        <CustomTypoGraphy variant="h4">
          Welcome to Utilities Hub, your central resource for all your utility
          needs!
        </CustomTypoGraphy>
        <CustomTypoGraphy variant="h5">
          Let us be your trusted companion in navigating the complex world of
          utilities, empowering you to make informed decisions and enjoy
          reliable services. Together, we can make utility management effortless
          and efficient.
        </CustomTypoGraphy>
        <ImageWrapper>
          <Image src={wawe} alt="image" />
        </ImageWrapper>
      </HomeTitle>
      <ToolsWrapper>
        <ToolsContainer>
          {config?.map(({ title, subTitle, icon, path }) => (
            <ToolsItem key={uuidv4()}>
              <Link to={path}>
                <ToolsItemIcon>{icon}</ToolsItemIcon>
                <CustomTypoGraphy variant="h6">{title}</CustomTypoGraphy>
                <CustomTypoGraphy variant="subtitle1">
                  {subTitle}
                </CustomTypoGraphy>
              </Link>
            </ToolsItem>
          ))}
        </ToolsContainer>
      </ToolsWrapper>
    </>
  );
};

export default Home;
