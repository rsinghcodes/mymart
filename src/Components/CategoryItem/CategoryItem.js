import {
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import React from "react";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  tile: {
    height: "200px",
    width: "24%",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      width: "48%",
      marginBottom: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  title: { color: "#001833" },
  titleBar: {
    background: "#fff",
    opacity: "0.7",
  },
  icon: {
    color: "#001833",
  },
}));

const CategoryItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  const classes = useStyles();
  return (
    <>
      <GridListTile
        component="div"
        className={classes.tile}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
        <img
          src={imageUrl}
          alt={title}
          style={{ width: "100%", height: "100%" }}
        />
        <GridListTileBar
          classes={{
            root: classes.titleBar,
            title: classes.title,
          }}
          title={title}
          actionIcon={
            <IconButton aria-label={title} className={classes.icon}>
              <ArrowForward />
            </IconButton>
          }
        />
      </GridListTile>
    </>
  );
};

export default withRouter(CategoryItem);
