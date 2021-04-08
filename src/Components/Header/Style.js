import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    background: "#f5faff",
  },
  grow: {
    flexGrow: 1,
  },
  navBox: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  menuButton: {
    color: "#000",
    display: "inline-block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
