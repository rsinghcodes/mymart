import { makeStyles, styled, withTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

export default makeStyles((theme) => ({
  root: {
    boxShadow: "0 10px 20px rgba(0,0,0,0.22)",
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export const MainLogo = styled(withTheme(Link))((props) => ({
  color: props.theme.palette.primary.main,
  textDecoration: "none",
  fontSize: "1.2rem",
  fontWeight: "bold",
}));
