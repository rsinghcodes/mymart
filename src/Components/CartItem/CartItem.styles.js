import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    margin: "15px",
    maxWidth: 400,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
    "&.MuiPaper-root": {
      overflow: "unset",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    marginLeft: "auto",
  },
}));
