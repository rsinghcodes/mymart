import { Container } from "@material-ui/core";
import React from "react";
import useStyles from "./Style";

const Banner = () => {
  const classes = useStyles();
  return <Container maxWidth={false} className={classes.root}></Container>;
};

export default Banner;
