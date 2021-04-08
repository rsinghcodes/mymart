import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    width: "20rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: theme.spacing(1),
    boxShadow: "0px 15px 30px rgba(0,0,0,0.26)",
    transition: "transform 200ms ease-in",
  },
  img: {
    maxWidth: "10rem",
    width: "100%",
    margin: "1rem auto 0 auto",
    backgroundSize: "cover",
  },
  grow: {
    flexGrow: 1,
  },
  subtitle2: {
    marginBottom: "10px",
  },
}));
