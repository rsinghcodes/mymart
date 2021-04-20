import {
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@material-ui/core";
import React from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CategoryIcon from "@material-ui/icons/Category";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import useStyles from "./Drawer.styles";
import { Link } from "react-router-dom";

const categories = [
  "Dairy & Bakery",
  "Biscuits & Cookies",
  "Atta, Flour & Sooji",
  "Bath & Toilet",
];

const DrawerItems = ({ setDrawerOpen, handleClick, open }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <div className={classes.drawerHeader}>
        <IconButton onClick={() => setDrawerOpen(false)}>
          {theme.direction === "rtl" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
        <Typography variant="body1">Raghvendra Singh</Typography>
      </div>
      <Divider />
      <List disablePadding className={classes.drawer}>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
          <ListItemIcon>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {categories.map((category, index) => {
              return (
                <ListItem button className={classes.nested} key={index}>
                  <ListItemText primary={category} />
                </ListItem>
              );
            })}
          </List>
        </Collapse>
        <ListItem
          button
          component={Link}
          to="/sign-in"
          onClick={() => setDrawerOpen(false)}
        >
          <ListItemIcon>
            <CheckCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Your Orders" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/sign-in"
          onClick={() => setDrawerOpen(false)}
        >
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Sign-in" />
        </ListItem>
      </List>
    </>
  );
};

export default DrawerItems;
