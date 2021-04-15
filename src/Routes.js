import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
// import PrivateRoute from "./Firebase/PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      {/* <PrivateRoute exact path="/" component={Homepage} /> */}
      <Route exact path="/" component={Homepage} />
      <Route path="/sign-in" component={SignInAndSignUpPage} />
    </Switch>
  );
};

export default Routes;
