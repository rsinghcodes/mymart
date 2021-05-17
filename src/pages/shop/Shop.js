import { Container, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../Redux/shop/shop.actions";
import React, { lazy, Suspense, useEffect } from "react";
import Spinner from "../../Components/Spinner/Spinner";

const CollectionsOverviewContainer = lazy(() =>
  import("../../Components/collections-overview/collections-overview.container")
);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

function Shop({ fetchCollectionsStartAsync }) {
  const classes = useStyles();
  useEffect(() => {
    fetchCollectionsStartAsync();
  });

  return (
    <Container disableGutters className={classes.root}>
      <Suspense fallback={<Spinner />}>
        <CollectionsOverviewContainer />
      </Suspense>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
