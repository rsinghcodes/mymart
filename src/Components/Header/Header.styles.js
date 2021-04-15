import { makeStyles, styled, withTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const drawerWidth = 220;

export default makeStyles((theme) => ({
  root: {
    padding: "0 3rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0 1rem",
    },
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
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
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export const MainLogo = styled(withTheme(Link))((props) => ({
  color: props.theme.palette.primary.main,
  textDecoration: "none",
  fontSize: "1.5rem",
  fontWeight: "bold",
}));
