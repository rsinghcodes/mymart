import React, { useEffect } from "react";
import { Container, CssBaseline, makeStyles } from "@material-ui/core";
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

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(2),
  },
}));

function App(props) {
  const classes = useStyles();
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
            <Container className={classes.root}>
              <Routes />
            </Container>
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
