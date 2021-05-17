import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    maxWidth: 200,
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
