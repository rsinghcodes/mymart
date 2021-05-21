import { makeStyles, styled, withTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

export default makeStyles((theme) => ({
  root: {
    padding: "0 40px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.22)",
    [theme.breakpoints.down("sm")]: {
      padding: "0 1rem",
    },
  },
  grow: {
    flexGrow: 1,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export const MainLogo = styled(withTheme(Link))((props) => ({
  color: props.theme.palette.primary.main,
  textDecoration: "none",
  fontSize: "1.2rem",
  fontWeight: "bold",
}));
