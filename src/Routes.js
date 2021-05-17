import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Spinner from "./Components/Spinner/Spinner";
import PrivateRoute from "./Firebase/PrivateRoute";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./Redux/user/user.selector";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up")
);
const Checkoutpage = lazy(() => import("./pages/Checkout-page/Checkoutpage"));
const Shop = lazy(() => import("./pages/shop/Shop"));

const Routes = ({ currentUser }) => {
  return (
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route
          path="/sign-in"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
        <PrivateRoute path="/checkout" component={Checkoutpage} />
      </Suspense>
    </Switch>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Routes);
