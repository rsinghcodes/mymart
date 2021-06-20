import React, { useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import Theme from "./Components/Theme/Theme";
import Header from "./Components/Header/Header";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";
import { setCurrentUser } from "./Redux/user/user.actions";
import { selectCurrentUser } from "./Redux/user/user.selector";
import styled from "styled-components";

function App(props) {
  const { setCurrentUser } = props;

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <>
      <ErrorBoundary>
        <Theme>
          <Router>
            <Header />
            <MainContainer>
              <Routes />
            </MainContainer>
          </Router>

          <CssBaseline />
        </Theme>
      </ErrorBoundary>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

const MainContainer = styled.div`
  margin: 5rem 1.8rem 0 1.5rem;

  @media screen and (max-width: 700px) {
    margin: 4rem 0.5rem 0 0.5rem;
  }
`;
