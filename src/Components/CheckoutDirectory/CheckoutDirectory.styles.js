import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
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