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

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <AuthRoutes exact path="/login" component={"Login"} />
          <PrivateRoutes path="/home" component={Home} />
          <PrivateRoutes
            path="/password-generator"
            component={PasswordGenerator}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
