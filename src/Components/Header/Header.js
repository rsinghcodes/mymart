import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CategoryIcon from "@material-ui/icons/Category";
import CartIcon from "../cart-icon/Cart-icon";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./Header.styles";
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
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const categories = [
  "Dairy & Bakery",
  "Biscuits & Cookies",
  "Atta, Flour & Sooji",
  "Bath & Toilet",
];

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [categoryAnchorEl, setCategoryAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState("Category");
  const isCategoryMenuOpen = Boolean(categoryAnchorEl);

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
        <ListItem button>
          <ListItemIcon>
            <CartIcon />
          </ListItemIcon>
          <ListItemText primary="Cart Items" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Category" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Sign-in" />
        </ListItem>
      </List>
    </>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.root} elevation={4}>
        <Toolbar>
          <Button
            href="/"
            style={{ fontWeight: "bold", fontSize: "1.5rem" }}
            className={classes.text}
          >
            mymart
          </Button>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show cart items" color="inherit">
              <CartIcon />
            </IconButton>
            <Button
              endIcon={<ExpandMoreIcon />}
              aria-label="show more"
              aria-controls={categoryMenuId}
              aria-haspopup="true"
              onClick={handleCategoryMenuOpen}
              variant="outlined"
              className={classes.text}
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
            <Button variant="outlined" href="/" className={classes.text}>
              Sign-in
            </Button>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="open drawer"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              style={{ width: "200%" }}
              onOpen={() => {
                return;
              }}
            >
              {drawerItems}
            </SwipeableDrawer>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
