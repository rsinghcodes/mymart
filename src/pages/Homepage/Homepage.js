import { Divider, Typography } from "@material-ui/core";
import React from "react";
import Directory from "../../Components/Directory/Directory";

const Homepage = () => {
  return (
    <>
      <img
        src="https://i.ibb.co/31K1QvX/Daily-Essentials-Store-web-0.jpg"
        alt=""
        style={{ width: "100%", height: "100%" }}
      />
      <Divider />
      <Typography
        variant="h6"
        style={{ marginTop: "15px", marginBottom: "10px", fontWeight: "bold" }}
      >
        SHOP BY CATEGORY
      </Typography>
      <Directory />
    </>
  );
};

export default Homepage;
