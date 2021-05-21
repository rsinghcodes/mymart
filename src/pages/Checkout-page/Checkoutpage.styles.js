import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  checkoutContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "0 0.5rem",
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: "1rem 0rem 1rem 0.5rem",
    maxWidth: "100%",
    boxShadow: "0 10px 20px rgba(0,0,0,0.22)",
    [theme.breakpoints.down("sm")]: {
      margin: "1rem 0 1rem 0rem",
    },
  },
}));
