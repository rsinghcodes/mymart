import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  drawerHeader: {
    position: "sticky",
    top: "0",
    zIndex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    backgroundColor: theme.palette.background.paper,
  },
}));
