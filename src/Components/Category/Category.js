import { Link } from "@material-ui/core";
import React from "react";
import dairyAndBakery from "../../assets/categoryImages/dairyAndBakery.jpg";
import snackes from "../../assets/categoryImages/snackes.jpg";
import staples from "../../assets/categoryImages/staples.jpg";
import shampoosAndconditioners from "../../assets/categoryImages/shampoosAndconditioners.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0 8px 15px rgba(0,0,0,0.26)",
    marginTop: "2rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "0rem",
    },
  },
}));

const Categories = () => {
  const classes = useStyles();
  return (
    <>
      <Link href="/" className={classes.root}>
        <img src={dairyAndBakery} alt="Dairy And Bakery" />
      </Link>
      <Link href="/" className={classes.root}>
        <img src={snackes} alt="Snackes & Branded Foods" />
      </Link>
      <Link href="/" className={classes.root}>
        <img src={staples} alt="Staples" />
      </Link>
      <Link href="/" className={classes.root}>
        <img src={shampoosAndconditioners} alt="Shampoos & Conditioners" />
      </Link>
    </>
  );
};

export default Categories;
