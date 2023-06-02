import "./App.css";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

import PrivateRoutes from "./routes/PrivateRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import Home from "./pages/Home";
import PasswordGenerator from "./pages/PasswordGenerator";
import PxToRem from "./pages/PxToRem";
import BmiCalc from "./pages/BmiCalc";
import ReelsDownloader from "./pages/ReelsDownloader";
import QrCode from "./pages/QrCode";
import ImageCompressor from "./pages/ImageCompressor";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <AuthRoutes exact path="/login" component={"Login"} />
          <AuthRoutes exact path="/register" component={"register"} />
          <PrivateRoutes path="/home" component={Home} />
          <PrivateRoutes
            path="/password-generator"
            component={PasswordGenerator}
          />
          <PrivateRoutes path="/bmi-calculator" component={BmiCalc} />
          <PrivateRoutes path="/reel-downloader" component={ReelsDownloader} />
          <PrivateRoutes path="/image-compressor" component={ImageCompressor} />
          <PrivateRoutes path="/file-convertor" component={"file-convertor"} />
          <PrivateRoutes
            path="/markdown-editor"
            component={"<>markdown-editor</>"}
          />
          <PrivateRoutes path="/px-to-rem" component={PxToRem} />
          <PrivateRoutes
            path="/pomodoro-timer"
            component={"PasswordGenerator"}
          />
          <PrivateRoutes path="/qr-code-generator" component={QrCode} />
          <PrivateRoutes
            path="/password-strength-checker"
            component={"PasswordGenerator"}
          />
          <PrivateRoutes
            path="/lorem-ipsum-generator"
            component={"PasswordGenerator"}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
