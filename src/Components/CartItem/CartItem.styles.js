import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    margin: "10px",
    maxWidth: 260,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "&.MuiPaper-root": {
      overflow: "unset",
    },
  },
  media: {
    height: "12rem",
    width: "100%",
  },
  expand: {
    marginLeft: "auto",
  },
}));
