import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import Alert from "../components/Alert";
import { styled as muiStyled } from "@mui/system";
import DownloadingIcon from "@mui/icons-material/Downloading";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";

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
  textAlign: "center",
  marginLeft: "auto",
  marginRight: "auto",
  color: "#383e45",
  paddingTop: props.variant === "h6" ? "0rem" : "1rem",
  paddingBottom:
    props.variant === "h6" || props.variant === "subtitle1" ? "1rem" : "2rem",
  fontWeight: props.variant === "subtitle1" ? "500" : "600",
}));

const Form = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
  paddingBottom: "1rem",
});

const ReelsDownloader = () => {
  const [reelUrl, setReelUrl] = useState("");
  const [open, setOpen] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const getId = (url) => {
    return url.split("reel/")[1].split(" ")[0].slice(0, 11);
  };

  const onChangeHandler = (e) => {
    setReelUrl(e.target.value);
  };
  const onClear = () => {
    setReelUrl("");
  };
  const fetchReel = async () => {
    const reelId = getId(reelUrl);
    if (reelId.length !== 11) {
      setOpen(true);
      return;
    }
    const response = await fetch(
      `https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/media_by_id?shortcode=${reelId}&response_type=reels&corsEnabled=false`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": `${process.env.REACT_APP_RAPIDAPI_KEY}`,
          "x-rapidapi-host": "instagram-bulk-profile-scrapper.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    // const data = [
    //   {
    //     items: [
    //       {
    //         id: "3108498591187086608",
    //         code: "Csjmv_Igi0Q",
    //         taken_at: 1684781942,
    //         user: {
    //           pk: "7610097121",
    //           username: "imjustbesti",
    //           profile_pic_url:
    //             "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-19/132189383_183306350158135_5612884967283823602_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=1&_nc_ohc=gNFdtNrH6JwAX-83hNU&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfArNDo380GX_dLedehxJD2Gvp9eTXBsWYu_kJ0I2E7Wrw&oe=647F39B8&_nc_sid=8721cf",
    //           is_private: false,
    //           is_verified: false,
    //           full_name: "imjustbesti",
    //         },
    //         can_viewer_reshare: true,
    //         caption_is_edited: true,
    //         like_and_view_counts_disabled: false,
    //         is_paid_partnership: false,
    //         is_affiliate: false,
    //         comment_count: 991,
    //         image_versions2: {
    //           candidates: [
    //             {
    //               width: 640,
    //               height: 1138,
    //               url: "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/348606466_6561783467179413_5525128032032229569_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=KFpnHxEftXgAX_C-N5d&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfBx48qslS0b-Cud0o8nmoNYguO1i65OcEI3XoFNxhChvQ&oe=647B0F80&_nc_sid=8721cf",
    //             },
    //             {
    //               width: 750,
    //               height: 1333,
    //               url: "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/348606466_6561783467179413_5525128032032229569_n.jpg?stp=dst-jpg_e35_p750x750_sh0.08&_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=KFpnHxEftXgAX_C-N5d&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfBzmTjeTRUJ8qc7jBhK5P-mS6eV9MMoppSNXwvhelgKzw&oe=647B0F80&_nc_sid=8721cf",
    //             },
    //             {
    //               width: 1080,
    //               height: 1920,
    //               url: "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/348606466_6561783467179413_5525128032032229569_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08&_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=KFpnHxEftXgAX_C-N5d&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfAR4ADD6lpd0HTbtYkUMp3oB9QUiZNOsE24CGx1pzj34w&oe=647B0F80&_nc_sid=8721cf",
    //             },
    //           ],
    //         },
    //         original_width: 1080,
    //         original_height: 1920,
    //         has_liked: false,
    //         can_see_insights_as_brand: false,
    //         caption: {
    //           created_at: "1684783533",
    //           text: "When You Try To Keep Kids Away From Technology 😭💀 (via: @ 13gurbaksh/TikTok)",
    //         },
    //         sharing_friction_info: {
    //           should_have_sharing_friction: false,
    //           bloks_app_url: null,
    //         },
    //         play_count: 6454071,
    //         view_count: 4226307,
    //         video_duration: 9.287,
    //         has_audio: true,
    //         product_type: "clips",
    //         video_versions: [
    //           {
    //             url: "https://scontent-lax3-2.cdninstagram.com/v/t50.2886-16/348951860_5875638415874208_7352762794930659325_n.mp4?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=100&_nc_ohc=Musn-2q_29IAX_9KEjJ&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfCTPIsEJ0c7DrRX60e4J7ZwQsHRPQavHAJIH-NhXKeNEQ&oe=647B30C0&_nc_sid=8721cf",
    //           },
    //         ],
    //         is_dash_eligible: false,
    //         number_of_qualities: 0,
    //         like_count: 193882,
    //         clips_metadata: {
    //           artist_name: "imjustbesti",
    //           song_name: "Original audio",
    //           uses_original_audio: true,
    //           should_mute_audio: false,
    //           should_mute_audio_reason: "",
    //           audio_id: "753223019797233",
    //         },
    //         carousel_media: [
    //           {
    //             media_type: 1,
    //           },
    //         ],
    //         media_type: 2,
    //         timeline_pinned_user_ids: [],
    //       },
    //     ],
    //     num_results: 1,
    //     more_available: false,
    //     auto_load_more_enabled: true,
    //     status: "ok",
    //   },
    // ];
    setReelUrl("");
    window.open(data[0]?.items[0]?.video_versions[0].url, "_blank");
  };

  const onDownload = () => {
    var regex =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    if (!regex.test(reelUrl)) {
      setOpen(true);
      return;
    }
    const url = new URL(reelUrl);
    console.log("url", url);
    if (url.host !== "www.instagram.com") {
      setOpen(true);
    } else {
      fetchReel();
    }
  };
  return (
    <Wrapper>
      <Container>
        <Content>
          <CustomTypoGraphy variant="h4">Reels Downloader</CustomTypoGraphy>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "0.5rem",
            }}
          >
            {" "}
            <InstagramIcon
              sx={{
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);",
                color: "white",
                height: "5rem",
                width: "5rem",
              }}
            />
          </div>

          <Form>
            <TextField
              type="text"
              value={reelUrl}
              onChange={onChangeHandler}
              placeholder="paste url here"
              InputProps={{
                endAdornment: (
                  <>
                    <IconButton
                      sx={{ visibility: reelUrl ? "visible" : "hidden" }}
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
              disabled={!reelUrl}
              onClick={(e) => onDownload(e)}
              endIcon={<DownloadingIcon />}
            >
              Download Reel
            </Button>
          </Form>
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
    </Wrapper>
    // <div>
    //   <h1>Reels Downloader</h1>
    //   <header className="reel-header">
    //     <div className="reel-creator">
    //       <img
    //         src={responseObj?.user?.profile_pic_url}
    //         className="profile-picture"
    //         alt="profile"
    //       />
    //       <div className="creator-info">
    //         <h3>{responseObj?.user?.username}</h3>
    //         <p>{responseObj?.user?.full_name}</p>
    //       </div>
    //     </div>
    //   </header>
    //   <div>
    //     <label>From:</label>
    //     <select value={baseCurrency} onChange={handleBaseCurrencyChange}>
    //       <option value="USD">USD</option>
    //       <option value="EUR">EUR</option>
    //       <option value="GBP">GBP</option>
    //       {/* Add more currency options here */}
    //     </select>
    //   </div>
    //   <div>
    //     <label>To:</label>
    //     <select value={targetCurrency} onChange={handleTargetCurrencyChange}>
    //       <option value="EUR">EUR</option>
    //       <option value="USD">USD</option>
    //       <option value="GBP">GBP</option>
    //       {/* Add more currency options here */}
    //     </select>
    //   </div>
    //   <button onClick={fetchReel}>Convert</button>
    //   {responseObj && (
    //     <>
    //       {" "}
    //       <header className="reel-header">
    //         <div className="reel-creator">
    //           <img
    //             src={responseObj.user.profile_pic_url}
    //             className="profile-picture"
    //             alt="profile"
    //           />
    //           <div className="creator-info">
    //             <h3>{responseObj.user.username}</h3>
    //             <p>{responseObj.user.full_name}</p>
    //           </div>
    //         </div>
    //       </header>
    //       <video controls className="reel-video">
    //         <source
    //           src={responseObj.video_versions[0].url}
    //           type="video/webm"
    //         ></source>
    //       </video>
    //       {/* <a className = "buttonDownload" target="_blank" download = "yasin.mp4" href={responseObj.video_versions[0].url} >Download !!!</a> */}
    //       {/* <p className="reel-caption">{responseObj.caption.text}</p> */}
    //       <a
    //         className="buttonDownload"
    //         target="_blank"
    //         download="yasin.mp4"
    //         href={responseObj.video_versions[0].url}
    //       >
    //         Download
    //       </a>
    //       <p className="reel-caption">{responseObj.caption.text}</p>
    //       {(() => {
    //         if (responseObj.caption === "NULL") {
    //           return <div>No Captions</div>;
    //         } else if (responseObj.caption) {
    //           return <p className="post-caption">{responseObj.caption.text}</p>;
    //         }
    //       })()}
    //     </>
    //   )}
    //   {exchangeRate && convertedAmount && (
    //     <p>
    //       {amount} {baseCurrency} is equal to {convertedAmount} {targetCurrency}
    //     </p>
    //   )}
    // </div>
  );
};

export default ReelsDownloader;
