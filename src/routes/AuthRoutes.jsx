import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout/index";

const AuthRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) =>
      localStorage.Token ? (
        <Redirect to="/trainee" />
      ) : (
        <AuthLayout>
          <Component {...matchProps} />
        </AuthLayout>
      )
    }
  />
);

export default AuthRoutes;
