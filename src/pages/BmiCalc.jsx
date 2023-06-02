/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { styled as muiStyled } from "@mui/system";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Alert from "../components/Alert";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Tooltip, tooltipClasses } from "@mui/material";

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

const Form = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
  paddingBottom: "1rem",
});

const Content = styled.div({
  width: "100%",
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
// EFF5FB
const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: "box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;",
    fontSize: 11,
  },
}));

const InformativeTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#EFF5FB",
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: "box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;",
    fontSize: 12,
  },
}));

const StyleWrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  width: "55%",
  marginTop: "0rem",
  borderRadius: "4px",
});

const StyleContent = styled.div((props) => ({
  display: "flex",
  gap: "5rem",
  marginTop: "0rem",
}));
const BmiCalc = () => {
  const [weight, setWeight] = useState("0");
  const [height, setHeight] = useState("0");
  const [age, setAge] = useState("0");
  const [gender, setGender] = useState(10);
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [bodyComposition, setBodyComposition] = useState("0");
  const [bmi, setBMI] = useState("");
  const [bmr, setBMR] = useState("");
  const [calorieIntake, setCalorieIntake] = useState("");
  const [muscleMass, setMuscleMass] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [heightCtg, setHeightCtg] = useState(20);
  const [feet, setFeet] = useState("0");
  const [centimeters, setCentimeters] = useState("0");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setBMI("");
  }, [weight, height]);

  useEffect(() => {
    setBMR("");
  }, [weight, height, age, gender]);

  useEffect(() => {
    setMuscleMass("");
  }, [bodyComposition, weight]);

  useEffect(() => {
    setCalorieIntake("");
  }, [bmr, activityLevel]);

  useEffect(() => {
    if (heightCtg === 10) {
      const feetValue = parseFloat(feet);
      if (!isNaN(feetValue)) {
        const cmValue = feetValue * 30.48;
        setHeight(cmValue.toFixed(2));
        setCentimeters(cmValue.toFixed(2));
      }
    } else if (heightCtg === 20) {
      const cmValue = parseFloat(centimeters);
      if (!isNaN(cmValue)) {
        const feetValue = cmValue / 30.48;
        setFeet(feetValue.toFixed(2));
      }
      setHeight(centimeters);
    }
  }, [feet, centimeters]);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height from cm to meters
      const bmiValue = weight / (heightInMeters * heightInMeters);
      if (isNaN(bmiValue)) {
        setBMI("0");
      } else {
        setBMI(bmiValue.toFixed(2)); // Round BMI to two decimal places
      }
    }
  };

  const calculateBMR = () => {
    if (weight && height && age) {
      let bmrValue;
      if (gender === "male") {
        bmrValue = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmrValue = 10 * weight + 6.25 * height - 5 * age - 161;
      }
      setBMR(bmrValue.toFixed(2)); // Round BMR to two decimal places
    }
  };

  const calculateCalorieIntake = () => {
    if (bmr && activityLevel) {
      let calorieIntakeValue;
      switch (activityLevel) {
        case "sedentary":
          calorieIntakeValue = bmr * 1.2;
          break;
        case "lightlyActive":
          calorieIntakeValue = bmr * 1.375;
          break;
        case "moderatelyActive":
          calorieIntakeValue = bmr * 1.55;
          break;
        case "veryActive":
          calorieIntakeValue = bmr * 1.725;
          break;
        case "extraActive":
          calorieIntakeValue = bmr * 1.9;
          break;
        default:
          calorieIntakeValue = bmr;
      }
      setCalorieIntake(calorieIntakeValue.toFixed(2)); // Round calorie intake to two decimal places
    }
  };
  const calculateMuscleMass = () => {
    if (weight && bodyComposition) {
      const muscleMassValue = weight * (bodyComposition / 100);
      setMuscleMass(muscleMassValue.toFixed(2)); // Round muscle mass to two decimal places
    }
  };
  return (
    <Wrapper>
      <Container>
        <Content>
          <CustomTypoGraphy variant="h4">
            Fitness and Health Calculator
          </CustomTypoGraphy>
          <Form>
            <StyleWrapper>
              <StyleContent>
                <CustomTypoGraphy variant="subtitle1">Weight:</CustomTypoGraphy>
                <TextField
                  id="input-with-icon-textfield"
                  placeholder="0"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">kg</InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  sx={{ input: { width: "3rem" } }}
                />
              </StyleContent>
              <StyleContent>
                <CustomTypoGraphy variant="subtitle1">Height:</CustomTypoGraphy>
                {heightCtg === 20 && (
                  <LightTooltip
                    arrow
                    placement="right"
                    title={
                      <>
                        {" "}
                        <FormControl sx={{ m: 0, minWidth: 100 }}>
                          <Select
                            // sx={{ p: 2 }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={heightCtg}
                            displayEmpty
                            inputProps={{
                              "aria-label": "Without label",
                              p: 0,
                              m: 0,
                            }}
                            onChange={(e) => setHeightCtg(e.target.value)}
                          >
                            <MenuItem value={10}>Feet</MenuItem>
                            <MenuItem value={20}>Cm</MenuItem>
                          </Select>
                        </FormControl>
                      </>
                    }
                  >
                    <TextField
                      id="input-with-icon-textfield"
                      placeholder="0"
                      type="number"
                      value={centimeters}
                      onChange={(e) => setCentimeters(e.target.value)}
                      variant="outlined"
                      InputProps={{
                        input: { min: 0 },
                        endAdornment: (
                          <InputAdornment position="end">cm</InputAdornment>
                        ),
                      }}
                      sx={{ input: { width: "4rem", min: 0 } }}
                    />
                  </LightTooltip>
                )}
                {heightCtg === 10 && (
                  <LightTooltip
                    arrow
                    placement="right"
                    title={
                      <>
                        {" "}
                        <FormControl sx={{ m: 0, minWidth: 50 }}>
                          <Select
                            sx={{ p: 0, m: 0 }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={heightCtg}
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                            onChange={(e) => setHeightCtg(e.target.value)}
                          >
                            <MenuItem value={10}>foot</MenuItem>
                            <MenuItem value={20}>cm</MenuItem>
                          </Select>
                        </FormControl>
                      </>
                    }
                  >
                    <TextField
                      id="input-with-icon-textfield"
                      placeholder="0"
                      type="number"
                      value={feet}
                      onChange={(e) => setFeet(e.target.value)}
                      variant="outlined"
                      InputProps={{
                        input: { min: 0 },
                        endAdornment: (
                          <InputAdornment position="end">foot</InputAdornment>
                        ),
                      }}
                      sx={{ input: { width: "4rem", min: 0 } }}
                    />
                  </LightTooltip>
                )}
              </StyleContent>
            </StyleWrapper>

            {!Boolean(bmi) && (
              <InformativeTooltip
                title="Required Weight and Height"
                arrow
                placement="right"
              >
                <Button variant="contained" onClick={() => calculateBMI()}>
                  Calculate BMI
                </Button>
              </InformativeTooltip>
            )}

            {bmi && (
              <InformativeTooltip
                title="Calculated using Weight and Height"
                arrow
                placement="right"
              >
                <Paper
                  component="form"
                  sx={{
                    p: "1rem",
                    display: "flex",
                    alignItems: "center",
                    width: "fit-content",
                    backgroundColor: "#F8F8FF",
                  }}
                >
                  Your BMI is: {bmi}
                </Paper>
              </InformativeTooltip>
            )}
            <Divider sx={{ p: 0.5, width: "100%" }} orientation="horizontal" />

            <StyleContent>
              <CustomTypoGraphy variant="subtitle1">
                Body Composition:
              </CustomTypoGraphy>
              <TextField
                id="input-with-icon-textfield"
                placeholder="0"
                type="number"
                value={bodyComposition}
                onChange={(e) => setBodyComposition(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
                variant="outlined"
                sx={{ input: { width: "4rem" } }}
              />
            </StyleContent>
            {!Boolean(muscleMass) && (
              <InformativeTooltip
                title="Required Weight and body Composition"
                arrow
                placement="right"
              >
                <Button
                  variant="contained"
                  onClick={() => calculateMuscleMass()}
                >
                  Calculate Muscle Mass
                </Button>
              </InformativeTooltip>
            )}
            {muscleMass && (
              <InformativeTooltip
                title="Calculated using Weight and body Composition"
                arrow
                placement="right"
              >
                <Paper
                  component="form"
                  sx={{
                    p: "1rem",
                    display: "flex",
                    alignItems: "center",
                    width: "fit-content",
                    backgroundColor: "#FFFAFA",
                  }}
                >
                  Your Muscle Mass is: {muscleMass} kg
                </Paper>
              </InformativeTooltip>
            )}
            <Divider sx={{ p: 0.5, width: "100%" }} orientation="horizontal" />
            <StyleWrapper>
              <StyleContent>
                <CustomTypoGraphy variant="subtitle1">Age:</CustomTypoGraphy>
                <TextField
                  id="input-with-icon-textfield"
                  placeholder="Age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  variant="outlined"
                  sx={{ input: { width: "4.5rem" }, ml: 2.5 }}
                />
              </StyleContent>
              <StyleContent>
                <CustomTypoGraphy variant="subtitle1">Gender:</CustomTypoGraphy>
                <FormControl sx={{ m: 0, minWidth: 100 }}>
                  <Select
                    // sx={{ p: 2 }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <MenuItem value={10}>Male</MenuItem>
                    <MenuItem value={20}>Female</MenuItem>
                  </Select>
                </FormControl>
              </StyleContent>
            </StyleWrapper>
            {!Boolean(bmr) && (
              <InformativeTooltip
                title="Required Weight, Height, Age and Gender"
                arrow
                placement="right"
              >
                <Button variant="contained" onClick={() => calculateBMR()}>
                  Calculate BMR
                </Button>
              </InformativeTooltip>
            )}
            {bmr && (
              <InformativeTooltip
                title="Calculated using Weight, Height, Age and Gender"
                arrow
                placement="right"
              >
                <Paper
                  component="form"
                  sx={{
                    p: "1rem",
                    display: "flex",
                    alignItems: "center",
                    width: "fit-content",
                    backgroundColor: "#FFFAF0",
                  }}
                >
                  Your BMR is: {bmr} calories/day{" "}
                </Paper>
              </InformativeTooltip>
            )}
            <Divider sx={{ p: 0.5, width: "100%" }} orientation="horizontal" />
            <StyleContent>
              <CustomTypoGraphy variant="subtitle1">
                Activity Level:
              </CustomTypoGraphy>
              <FormControl sx={{ m: 0, minWidth: 100 }}>
                <Select
                  // sx={{ p: 2 }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                >
                  <MenuItem value="sedentary">
                    Sedentary (little to no exercise)
                  </MenuItem>
                  <MenuItem value="lightlyActive">
                    Lightly Active (light exercise/sports 1-3 days/week)
                  </MenuItem>
                  <MenuItem value="moderatelyActive">
                    Moderately Active (moderate exercise/sports 3-5 days/week)
                  </MenuItem>
                  <MenuItem value="veryActive">
                    {" "}
                    Very Active (hard exercise/sports 6-7 days/week)
                  </MenuItem>
                  <MenuItem value="extraActive">
                    Extra Active (very hard exercise/sports and a physical job){" "}
                  </MenuItem>
                </Select>
              </FormControl>
            </StyleContent>
            {!Boolean(calorieIntake) && (
              <InformativeTooltip
                title="Required BMR and Activity Level"
                arrow
                placement="right"
              >
                <Button
                  variant="contained"
                  onClick={() => calculateCalorieIntake()}
                >
                  Calculate Daily Calorie Intake
                </Button>
              </InformativeTooltip>
            )}
            {calorieIntake && (
              <InformativeTooltip
                title="Calculated using BMR and Activity Level"
                arrow
                placement="right"
              >
                <Paper
                  component="form"
                  sx={{
                    p: "1rem",
                    display: "flex",
                    alignItems: "center",
                    width: "fit-content",
                    backgroundColor: "#FFF0f5",
                  }}
                >
                  Your suggested daily calorie intake is: {calorieIntake}{" "}
                  calories/day
                </Paper>
              </InformativeTooltip>
            )}
          </Form>
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

export default BmiCalc;
