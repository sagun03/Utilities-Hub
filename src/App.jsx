import "./App.css";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

import PrivateRoutes from "./routes/PrivateRoutes";
import AuthRoutes from "./routes/AuthRoutes";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <AuthRoutes exact path="/login" component={"Login"} />
          <PrivateRoutes path="/" component={"Home"} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
