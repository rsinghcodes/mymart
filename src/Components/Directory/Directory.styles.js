import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    marginTop: "0rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      overflow: "auto",
      marginTop: "3rem",
    },
  },
}));
