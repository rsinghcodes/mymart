import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Spinner from './Components/Spinner/Spinner';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './Redux/user/user.selector';

const Homepage = lazy(() => import('./pages/Homepage'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up'));
const Shop = lazy(() => import('./pages/shop'));
const Checkoutpage = lazy(() => import('./pages/Checkout-page'));
const OrdersPage = lazy(() => import('./pages/orders'));
const NotFound = lazy(() => import('./pages/404'));

const Routes = ({ currentUser }) => {
  return (
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route
          path="/sign-in"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
        <Route
          path="/checkout"
          render={() =>
            currentUser ? <Checkoutpage /> : <SignInAndSignUpPage />
          }
        />
        <Route exact path="/orders" component={OrdersPage} />
        <Route component={NotFound} />
      </Suspense>
    </Switch>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Routes);
