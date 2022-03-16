import { Container, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import React, { lazy, Suspense, useEffect } from "react";
import { Route } from "react-router-dom";

import Spinner from "../../Components/Spinner/Spinner";
import { fetchCollectionsStartAsync } from "../../Redux/shop/shop.actions";

const CollectionsOverviewContainer = lazy(() =>
  import("../../Components/collections-overview/collections-overview.container")
);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

function Shop({ fetchCollectionsStartAsync, match }) {
  const classes = useStyles();
  useEffect(() => {
    fetchCollectionsStartAsync();
  });

  return (
    <Container disableGutters className={classes.root}>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
      </Suspense>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
