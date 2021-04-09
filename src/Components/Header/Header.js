import React, { useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useStyles from "./Style";
import Box from "@material-ui/core/Box";
import { Badge, Button, IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "../../logo.png";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CategoryIcon from "@material-ui/icons/Category";
import LoginToAppIcon from "@material-ui/icons/ExitToApp";

const categories = [
  "Fruits & Vegetables",
  "Dairy & Bakery",
  "Snackes & Branded Foods",
  "Staples",
];

const Header = () => {
  const [elevation, setElevation] = React.useState(0);
  const classes = useStyles();
  const [CategoriesMenuEL, setCategoriesMenuEL] = useState(null);
  const [NavEL, setNavEL] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleCategoriesOpen = (e) => setCategoriesMenuEL(e.currentTarget);
  const handleCategoriesClose = () => setCategoriesMenuEL(null);
  const handleMenuOpen = (e) => setNavEL(e.currentTarget);
  const handleMenuClose = () => setNavEL(null);
  const handleSelect = (index) => {
    setSelectedIndex(index);
    handleCategoriesClose();
  };

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setElevation(4);
      } else {
        setElevation(0);
      }
    });
  });

  const renderNav = (
    <Menu open={NavEL} anchorEl={NavEL} onClose={handleMenuClose}>
      <MenuItem>
        <IconButton aria-label="show cart items" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart Items</p>
      </MenuItem>
      <MenuItem onClick={handleCategoriesOpen}>
        <IconButton aria-label="show categories" color="inherit">
          <CategoryIcon />
        </IconButton>
        <p>Categories</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="sign-in" color="inherit">
          <LoginToAppIcon />
        </IconButton>
        <p>Sign-in</p>
      </MenuItem>
    </Menu>
  );

  const renderCategories = (
    <Menu
      open={CategoriesMenuEL}
      anchorEl={CategoriesMenuEL}
      onClose={handleCategoriesClose}
    >
      {categories.map((item, index) => (
        <MenuItem
          key={index}
          selected={selectedIndex === index}
          onClick={() => handleSelect(index)}
        >
          {item}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <>
      <AppBar className={classes.root} elevation={elevation}>
        <Toolbar>
          <Button className={classes.label} href="/">
            <img src={logo} alt="logo" style={{ width: "1.4rem" }} />
            <span
              style={{
                fontSize: "1.2rem",
                marginLeft: "0.5rem",
                fontWeight: "bold",
              }}
            >
              mymart
            </span>
          </Button>
          <div className={classes.grow} />
          <IconButton
            aria-label="show more"
            aria-controls="primary-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
            className={classes.sectionMobile}
          >
            <MoreVertIcon />
          </IconButton>
          {renderNav}
          <Box boxShadow={0} className={classes.sectionDesktop}>
            <IconButton
              aria-label="show cart items"
              style={{ marginRight: "1rem" }}
              color="inherit"
            >
              <Badge badgeContent={10} color="secondary">
                <ShoppingCartIcon color="inherit" />
              </Badge>
            </IconButton>

            <Button
              aria-label="show more"
              aria-controls="primary-menu"
              aria-haspopup="true"
              onClick={handleCategoriesOpen}
              className={classes.label}
              endIcon={<ExpandMoreIcon />}
            >
              Categories
            </Button>
            <Button className={classes.label} href="/">
              Sign-in
            </Button>
            {renderCategories}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
