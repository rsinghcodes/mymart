import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 290,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 180,
    },
  },
  media: {
    height: "12rem",
    width: "100%",
  },
}));
