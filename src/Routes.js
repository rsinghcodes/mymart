import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Spinner from "./Components/Spinner/Spinner";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up")
);
const Checkoutpage = lazy(() => import("./pages/Checkout-page/Checkoutpage"));

const Routes = () => {
  return (
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route exact path="/" component={Homepage} />
        <Route path="/sign-in" component={SignInAndSignUpPage} />
        <Route path="/checkout" component={Checkoutpage} />
      </Suspense>
    </Switch>
  );
};

export default Routes;
