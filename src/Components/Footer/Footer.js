import { Box, Divider } from "@material-ui/core";
import React from "react";
import useStyles from "./Footer.styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Divider />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        className={classes.root}
      >
        &copy; mymart - {new Date().getFullYear()}
      </Box>
    </>
  );
};

export default Footer;
