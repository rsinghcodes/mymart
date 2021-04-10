import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import CategoryIcon from "@material-ui/icons/Category";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./Style";
import {
  Button,
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SwipeableDrawer,
} from "@material-ui/core";
import logo from "../../logo.png";
import MenuIcon from "@material-ui/icons/Menu";

const categories = [
  "Dairy & Bakery",
  "Biscuits & Cookies",
  "Atta, Flour & Sooji",
  "Shampoos & Conditioners",
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
            <Badge badgeContent={10} color="secondary">
              <ShoppingCartIcon />
            </Badge>
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
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Link
            href="/"
            underline="none"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={logo}
              alt=""
              style={{ width: "1.5rem", marginRight: "0.5rem" }}
            />
            <Typography className={classes.title} variant="h6" noWrap>
              mymart
            </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show cart items" color="inherit">
              <Badge badgeContent={10} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Button
              endIcon={<ExpandMoreIcon />}
              className={classes.label}
              aria-label="show more"
              aria-controls={categoryMenuId}
              aria-haspopup="true"
              onClick={handleCategoryMenuOpen}
              color="inherit"
            >
              {categories[selectedIndex] || "Category"}
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
            <Button className={classes.label}>Sign-in</Button>
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
            >
              {drawerItems}
            </SwipeableDrawer>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
