import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CategoryIcon from "@material-ui/icons/Category";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CartIcon from "../cart-icon/Cart-icon";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles, { MainLogo } from "./Header.styles";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Button,
  Tooltip,
  Collapse,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const categories = [
  "Dairy & Bakery",
  "Biscuits & Cookies",
  "Atta, Flour & Sooji",
  "Bath & Toilet",
];

export default function Header() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [categoryAnchorEl, setCategoryAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState("Category");
  const isCategoryMenuOpen = Boolean(categoryAnchorEl);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleCategoryMenuOpen = (event) => {
    setCategoryAnchorEl(event.currentTarget);
  };
  const handleCategoryMenuClose = () => {
    setCategoryAnchorEl(null);
  };
  const handleCategorySelect = (index) => {
    setSelectedIndex(index);
    handleCategoryMenuClose();
  };

  const categoryMenuId = "primary-category-menu";
  const drawerItems = (
    <>
      <div className={classes.toolbar} />
      <Divider />
      <List disablePadding className={classes.drawer}>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
          {open ? <ExpandLess /> : <ExpandMore />}
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
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Sign-in" />
        </ListItem>
      </List>
    </>
  );

  return (
    <>
      <div className={classes.grow}>
        <AppBar position="fixed" elevation={0}>
          <Toolbar className={classes.root}>
            <MainLogo to="/">mymart</MainLogo>
            <div className={classes.grow} />
            <CartIcon />
            <div className={classes.sectionDesktop}>
              <Button
                endIcon={<ExpandMoreIcon />}
                aria-label="show more"
                aria-controls={categoryMenuId}
                aria-haspopup="true"
                onClick={handleCategoryMenuOpen}
                style={{ margin: "0 1.5rem" }}
              >
                {categories[selectedIndex] || "Categories"}
              </Button>
              <Menu
                open={isCategoryMenuOpen}
                anchorEl={categoryAnchorEl}
                onClose={handleCategoryMenuClose}
              >
                {categories.map((category, index) => {
                  return (
                    <MenuItem
                      key={index}
                      selected={selectedIndex === index}
                      onClick={() => handleCategorySelect(index)}
                    >
                      {category}
                    </MenuItem>
                  );
                })}
              </Menu>

              <Tooltip title="Sign-in to purchase">
                <Button component={Link} to="/sign-in">
                  Sign In
                </Button>
              </Tooltip>
            </div>

            <div className={classes.sectionMobile}>
              <IconButton
                edge="end"
                aria-label="open drawer"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                onOpen={() => {
                  return;
                }}
              >
                {drawerItems}
              </SwipeableDrawer>
            </div>
          </Toolbar>
          <Divider />
        </AppBar>
      </div>
    </>
  );
}
