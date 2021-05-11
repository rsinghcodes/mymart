import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "1rem 0.5rem 1rem 0",
    maxWidth: "100%",
    boxShadow: "0 10px 20px rgba(0,0,0,0.22)",
    [theme.breakpoints.down("sm")]: {
      margin: "1rem 0 1rem 0",
    },
  },
  image: {
    width: 150,
    height: 130,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export const pricingGrid = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
};
