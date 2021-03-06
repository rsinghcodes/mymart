import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  drawer: {
    width: "auto",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
