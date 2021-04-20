import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  item: {
    padding: "1rem 1.5rem",
    boxShadow: "0 10px 20px rgba(0,0,0,0.22)",
    [theme.breakpoints.down("sm")]: {
      padding: "16px",
    },
  },
}));
