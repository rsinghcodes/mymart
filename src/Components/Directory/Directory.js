import { Container } from "@material-ui/core";
import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import useStyles from "./Directory.styles";

const Directory = () => {
  const classes = useStyles();
  return (
    <Container disableGutters className={classes.root}>
      <CategoryItem />
    </Container>
  );
};

export default Directory;
