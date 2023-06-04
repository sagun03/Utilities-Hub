/* eslint-disable no-sequences */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import Alert from "../components/Alert";
import { styled as muiStyled } from "@mui/system";
import DownloadingIcon from "@mui/icons-material/Downloading";
import CloseIcon from "@mui/icons-material/Close";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SimpleBackdrop from "./Backdrop";

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
const Content = styled.div({
  width: "100%",
  overflow: "hidden",
});

const CustomTypoGraphy = muiStyled(Typography)((props) => ({
  textAlign: props.align ? props.align : "center",
  marginLeft: "auto",
  marginRight: "auto",
  color: "#383e45",
  flex: props.flex && props.flex,
  paddingTop: props.variant === "h6" ? "0rem" : "1rem",
  paddingBottom:
    props.variant === "h6" || props.variant === "subtitle1" ? "1rem" : "2rem",
  fontWeight: props.variant === "subtitle1" ? "500" : "600",
}));

const Form = styled.form({
  width: "100%",
  padding: "0 2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
  paddingBottom: "1rem",
});

const StyleContent = styled.div((props) => ({
  display: "flex",
  gap: "1rem",
  padding: props.padding ? props.padding : "2rem",
  marginTop: "0rem",
  flex: props.flex && props.flex,
  flexDirection: props.direction && props.direction,
  justifyContent: props.justifyContent && props.justifyContent,
}));
const YoutubeDownloader = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [open, setOpen] = useState();
  const [option, setOption] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const getId = (url) => {
    if (option === "Videos") {
      return url?.split("watch?v=")[1];
    } else {
      return url?.split("shorts/")[1].includes("?")
        ? url?.split("shorts/")[1].split("?")[0]
        : url?.split("shorts/")[1];
    }
  };

  const onChangeHandler = (e) => {
    setYoutubeUrl(e.target.value);
  };
  const onClear = () => {
    setYoutubeUrl("");
  };
  const fetchYoutube = async () => {
    const youtubeId = getId(youtubeUrl);
    if (youtubeId.length !== 11) {
      setOpen(true);
      return;
    }
    setIsLoading(true);
    const response = await fetch(
      `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${youtubeId}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": `${process.env.REACT_APP_RAPIDAPI_KEY}`,
          "x-rapidapi-host": "ytstream-download-youtube-videos.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    setIsLoading(false);
    setYoutubeUrl("");
    let urlObject;
    if (option === "Shorts") {
      urlObject = data?.formats?.find((item) => item?.qualityLabel === "720p");
      if (!urlObject) {
        urlObject = data?.formats?.find(
          (item) => item?.qualityLabel === "360p"
        );
      }
    } else {
      urlObject = data?.formats?.find((item) => item?.qualityLabel === "360p");
    }
    console.log("data?.formats", data?.formats);
    window.open(urlObject?.url, "_blank");
  };

  const onDownload = () => {
    var regex =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    if (!regex.test(youtubeUrl)) {
      setOpen(true);
      return;
    }
    const url = new URL(youtubeUrl);

    if (!url?.host?.includes("youtube")) {
      setOpen(true);
    } else {
      fetchYoutube();
    }
  };
  return (
    <Wrapper>
      <Container>
        <Content>
          <CustomTypoGraphy variant="h4">
            Youtube Shorts/Videos Downloader
          </CustomTypoGraphy>
          <section
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "0.5rem",
            }}
          >
            {" "}
            <YouTubeIcon
              sx={{ color: "#c4302B", height: "5rem", width: "5rem" }}
            />
          </section>
          {!Boolean(option) && (
            <StyleContent padding="1rem" justifyContent="center">
              <Button variant="contained" onClick={() => setOption("Shorts")}>
                Shorts
              </Button>
              <Button variant="contained" onClick={() => setOption("Videos")}>
                Videos
              </Button>
            </StyleContent>
          )}

          {option && (
            <Form>
              <TextField
                type="text"
                value={youtubeUrl}
                onChange={onChangeHandler}
                placeholder={`Paste ${option} url here`}
                InputProps={{
                  endAdornment: (
                    <>
                      <IconButton
                        sx={{ visibility: youtubeUrl ? "visible" : "hidden" }}
                        onClick={() => onClear()}
                      >
                        <CloseIcon />
                      </IconButton>
                    </>
                  ),
                }}
                variant="outlined"
                sx={{ input: { width: "25rem" }, mt: 2 }}
              />
              <Button
                variant="contained"
                disabled={!youtubeUrl}
                onClick={(e) => onDownload(e)}
                endIcon={<DownloadingIcon />}
              >
                {`Download ${option}`}
              </Button>
              <Button
                variant="contained"
                onClick={() => (setOption(""), setYoutubeUrl(""))}
              >
                {"<- Back"}
              </Button>
            </Form>
          )}
        </Content>
      </Container>
      {Boolean(open) && (
        <Alert
          open={Boolean(open)}
          type={"error"}
          message={"Invalid Reel URL"}
          setOpen={setOpen}
        />
      )}
      {isLoading && <SimpleBackdrop open={isLoading} setOpen={setIsLoading} />}
    </Wrapper>
  );
};

export default YoutubeDownloader;
