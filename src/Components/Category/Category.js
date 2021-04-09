import { Grid } from "@material-ui/core";
import React from "react";

const Categories = (props) => {
  const { name } = props;
  return (
    <Grid xs={6} style={{ border: "1px solid black" }}>
      {name}
    </Grid>
  );
};

export default Categories;
