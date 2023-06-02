/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Divider, MenuItem, Select, Typography } from "@mui/material";
import Alert from "../components/Alert";
import { styled as muiStyled } from "@mui/system";
import DownloadingIcon from "@mui/icons-material/Downloading";
import Compressor from "compressorjs";
import Chip from "@mui/material/Chip";

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

const FormWrapper = styled.div((props) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: props?.direction ? props.direction : "row",
  gap: "2rem",
  paddingBottom: "1rem",
  padding: props.padding && props.padding,
}));

const Form = styled.form({
  width: "100%",
  padding: "0 2rem",
});

const Label = styled.label((props) => ({
  height: "100%",
  flexDirection: "column",
  display: "flex",
  padding: "2rem 0rem",
  alignItems: "center",
  justifyContent: "center",
  borderWidth: "2px",
  borderRadius: "1rem",
  borderStyle: "dashed",
  borderColor: props.color,
  backgroundColor: props.backgroundColor,
}));

const Input = styled.input({
  marginLeft: "5rem",
});

const ContentWrapper = styled.div((props) => ({
  border: "2px solid black",
  flex: props.flex,
}));

const StyleContent = styled.div((props) => ({
  display: "flex",
  gap: "1rem",
  padding: props.padding ? props.padding : "2rem",
  marginTop: "0rem",
  flex: props.flex && props.flex,
  flexDirection: props.direction && props.direction,
}));

const Image = styled.img({
  height: "250px",
  width: "250px",
});

const ImageCompressor = () => {
  const [open, setOpen] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [quality, setQuality] = useState(0.8);
  const [url, setUrl] = useState("");
  // const [convertSize, setConvertSize] = useState(500000);
  const [compressedFile, setCompressedFile] = useState({
    name: "",
    type: "",
    size: "",
  });
  const [file, setFiles] = useState("");

  const handleCompressor = (image) => {
    new Compressor(image, {
      quality, // 0.6 can also be used, but its not recommended to go below.
      success: (compressedResult) => {
        const formData = new Blob([compressedResult]);
        const url = window.URL.createObjectURL(formData);
        setUrl(url);
        setCompressedFile(compressedResult);
      },
    });
  };

  useEffect(() => {
    if (file?.name) {
      handleCompressor(file);
    }
  }, [quality]);

  const handleChange = function (e) {
    e.preventDefault();
    const image = e?.target?.files[0];
    if (image) {
      setFiles(image);
      handleCompressor(image);
    }
  };

  const getSize = (size) => {
    const kb = size / 1024;
    const roundOffKB = kb % 1 !== 0 ? kb.toFixed(2) : kb;
    let returnItem = `${roundOffKB} KB`;
    if (roundOffKB >= 1024) {
      const mb = size / (1024 * 1024);
      const roundOffMB = mb % 1 !== 0 ? mb.toFixed(2) : mb;
      returnItem = `${roundOffMB} MB`;
    }
    return returnItem;
  };

  const onButtonClick = () => {
    let anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${name}`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  const menuItems = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
  const { name, type, size } = compressedFile;
  return (
    <Wrapper>
      <Container>
        <Content>
          <CustomTypoGraphy variant="h4">Image Compressor</CustomTypoGraphy>
          <FormWrapper>
            <Form>
              <Label
                id="label-file-upload"
                htmlFor="input-file-upload"
                backgroundColor="#f8fafc"
                color="#cbd5e1"
              >
                <Input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleChange}
                />
              </Label>
            </Form>
          </FormWrapper>
          {compressedFile?.name && (
            <FormWrapper padding="1.5rem">
              <ContentWrapper flex="1">
                <CustomTypoGraphy variant="h5">
                  Options{" "}
                  <Divider
                    sx={{
                      p: 0.5,
                      width: "100%",
                      borderColor: "black",
                    }}
                    orientation="horizontal"
                  />
                  <StyleContent>
                    <CustomTypoGraphy
                      variant="subtitle1"
                      flex="1"
                      align="start"
                    >
                      Quality
                    </CustomTypoGraphy>
                    <Select
                      sx={{ p: 0, m: 0, flex: 1 }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={quality}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      onChange={(e) => setQuality(e.target.value)}
                    >
                      {menuItems.map((item) => (
                        <MenuItem value={item} key={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </StyleContent>
                  <Button
                    variant="contained"
                    onClick={() => onButtonClick()}
                    endIcon={<DownloadingIcon />}
                  >
                    Download Compressed Image
                  </Button>
                  <CustomTypoGraphy variant="subtitle1">
                    Compressed Image Size: {getSize(size)}
                  </CustomTypoGraphy>
                  {/* <StyleContent>
                    <CustomTypoGraphy
                      variant="subtitle1"
                      flex="1"
                      align="start"
                    >
                      Convert Size
                    </CustomTypoGraphy>
                    <TextField
                      id="input-with-icon-textfield"
                      placeholder="0"
                      type="number"
                      value={convertSize}
                      onChange={(e) => setConvertSize(e.target.value)}
                      variant="outlined"
                      sx={{ flex: 1 }}
                    />
                  </StyleContent> */}
                </CustomTypoGraphy>
              </ContentWrapper>
              <ContentWrapper flex="1.5">
                <CustomTypoGraphy variant="h5">
                  Output Image{" "}
                  <CustomTypoGraphy
                    variant="subtitle1"
                    padding="0rem !important"
                  >
                    (compressed Image)
                  </CustomTypoGraphy>
                  <Chip
                    label={
                      <>Original size of pic: {getSize(file.size)} (nearly)</>
                    }
                    color="primary"
                  />
                  <Divider
                    sx={{
                      p: 0.5,
                      width: "100%",
                      borderColor: "black",
                    }}
                    orientation="horizontal"
                  />
                </CustomTypoGraphy>
                <StyleContent>
                  <Image alt="output" src={url} />
                  <StyleContent flex="2" padding="0" direction="column">
                    <StyleContent flex="2" padding="0">
                      <CustomTypoGraphy
                        variant="subtitle1"
                        flex="1"
                        align="start"
                      >
                        Name:{" "}
                      </CustomTypoGraphy>
                      <CustomTypoGraphy
                        variant="subtitle1"
                        flex="1"
                        align="start"
                      >
                        {name}
                      </CustomTypoGraphy>
                    </StyleContent>
                    <StyleContent flex="2" padding="0">
                      <CustomTypoGraphy
                        variant="subtitle1"
                        flex="1"
                        align="start"
                      >
                        type:{" "}
                      </CustomTypoGraphy>
                      <CustomTypoGraphy
                        variant="subtitle1"
                        flex="1"
                        align="start"
                      >
                        {type}
                      </CustomTypoGraphy>
                    </StyleContent>
                    <StyleContent flex="2" padding="0">
                      <CustomTypoGraphy
                        variant="subtitle1"
                        flex="1"
                        align="start"
                      >
                        Size:{" "}
                      </CustomTypoGraphy>
                      <CustomTypoGraphy
                        variant="subtitle1"
                        flex="1"
                        align="start"
                      >
                        {getSize(size)}
                      </CustomTypoGraphy>
                    </StyleContent>
                  </StyleContent>
                </StyleContent>
              </ContentWrapper>
            </FormWrapper>
          )}
        </Content>
      </Container>
      {Boolean(open) && (
        <Alert
          open={Boolean(open)}
          type={"success"}
          message={`Image has been compressed to ${getSize(size)}`}
          setOpen={setOpen}
        />
      )}
    </Wrapper>
  );
};

export default ImageCompressor;
