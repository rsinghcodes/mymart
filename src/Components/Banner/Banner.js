import { Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./Style";

const Banner = () => {
  const classes = useStyles();
  return (
    <Container maxWidth={false} className={classes.root}>
      <Typography
        align="center"
        component="h2"
        variant="h2"
        fontWeight="fontWeightBold"
      >
        Shop Your Happiness...
      </Typography>
    </Container>
  );
};

export default Banner;
