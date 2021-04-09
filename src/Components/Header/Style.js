import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    background: "#f5faff",
    color: "#001833",
  },
  grow: {
    flexGrow: 1,
  },
  label: {
    textTransform: "none",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
