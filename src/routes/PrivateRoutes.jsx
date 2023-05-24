import React from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout/PrivateLayout";

const PrivateRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) =>
      true ? (
        <PrivateLayout>
          <Component {...matchProps} />
        </PrivateLayout>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoutes;
