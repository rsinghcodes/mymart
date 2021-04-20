import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export default makeStyles((theme) => ({
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
