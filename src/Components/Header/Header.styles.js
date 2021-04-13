import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 220;

export default makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  text: {
    textTransform: "none",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawer: {
    width: drawerWidth,
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
