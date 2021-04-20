import { makeStyles, styled, withTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const drawerWidth = 240;

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
  toolbar: theme.mixins.toolbar,
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  drawer: {
    width: drawerWidth,
  },
  paper: {
    "& .MuiDrawer-paper": {
      backgroundColor: theme.palette.background.paper,
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