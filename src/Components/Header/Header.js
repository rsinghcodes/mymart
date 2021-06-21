import React, { useState } from "react";
import useStyles from "./Header.styles";
import {
  SwipeableDrawer,
  Toolbar,
  AppBar,
  useMediaQuery,
  Badge,
  IconButton,
  Tooltip,
  Button,
  MenuItem,
  Menu,
} from "@material-ui/core";
import {
  Flare,
  ShoppingCart,
  KeyboardArrowDown,
  CategoryRounded,
  Person,
  NightsStay,
} from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import DrawerItems from "../DrawerItems/DrawerItems";
import CartDrawer from "../Cart-Drawer/Cart-Drawer";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import { auth } from "../../Firebase/Firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleTheme } from "../../Redux/theme/theme.action";
import { selectThemeMode } from "../../Redux/theme/theme.selector";
import { selectCartItemsCount } from "../../Redux/cart/cart.selectors";
import { selectCurrentUser } from "../../Redux/user/user.selector";
import { selectDirectorySections } from "../../Redux/directory/directory.selectors";
import { toggleCartOpen } from "../../Redux/cart/cart.actions";

function Header({
  toggleTheme,
  theme,
  toggleCartOpen,
  itemCount,
  currentUser,
  categories,
  history,
  match,
}) {
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${theme})`);
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorUserEl, setAnchorUserEl] = useState(null);
  const [categoryAnchorEL, setCategoryAnchorEL] = useState(null);
  const handleCategoryOpen = (e) => setCategoryAnchorEL(e.currentTarget);
  const handleCategoryClose = () => setCategoryAnchorEL(null);
  const handleSelect = () => {
    handleCategoryClose();
  };

  const handleUserClick = (event) => {
    setAnchorUserEl(event.currentTarget);
  };
  const handleUserClose = () => {
    setAnchorUserEl(null);
  };

  const handleDrawerClick = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleSignoutbtn = () => {
    auth.signOut();
    setDrawerOpen(false);
  };

  const renderMobileMenu = (
    <>
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
        className={classes.paper}
      >
        <DrawerItems
          setDrawerOpen={setDrawerOpen}
          handleClick={handleDrawerClick}
          currentUser={currentUser}
          categories={categories}
          handleSignoutbtn={handleSignoutbtn}
        />
      </SwipeableDrawer>
    </>
  );

  const renderDeskTopMenu = (
    <>
      <Button component={Link} to="/shop">
        Shop
      </Button>
      <Button
        onClick={handleCategoryOpen}
        startIcon={<CategoryRounded />}
        endIcon={<KeyboardArrowDown />}
      >
        Categories
      </Button>
      <Menu
        keepMounted
        open={Boolean(categoryAnchorEL)}
        anchorEl={categoryAnchorEL}
        onClose={handleCategoryClose}
      >
        {categories.map((item, index) => (
          <MenuItem
            key={item.id}
            onClick={() => {
              handleSelect();
              history.push(`${match.url}${item.linkUrl}`);
            }}
          >
            {item.title}
          </MenuItem>
        ))}
      </Menu>
      <Button
        aria-haspopup="true"
        onClick={handleUserClick}
        startIcon={<Person />}
        endIcon={<KeyboardArrowDown />}
      >
        {currentUser ? currentUser.displayName : "Guest User"}
      </Button>
      <Menu
        keepMounted
        anchorEl={anchorUserEl}
        open={Boolean(anchorUserEl)}
        onClose={handleUserClose}
      >
        {currentUser ? (
          <MenuItem
            onClick={() => {
              handleSignoutbtn();
              handleUserClose();
            }}
            component={Link}
            to="/sign-in"
          >
            SIGN OUT
          </MenuItem>
        ) : (
          <MenuItem onClick={handleUserClose} component={Link} to="/sign-in">
            SIGN IN
          </MenuItem>
        )}
      </Menu>
    </>
  );

  return (
    <>
      <div className={classes.grow}>
        <AppBar position="fixed">
          <Toolbar>
            <Button
              component={Link}
              to="/"
              style={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              mymart
            </Button>
            <div className={classes.grow} />
            <Tooltip title="Switch to Dark/Light mode">
              <IconButton onClick={toggleTheme}>
                {prefersDarkMode ? <NightsStay /> : <Flare />}
              </IconButton>
            </Tooltip>
            <Tooltip title="Cart Items">
              <IconButton onClick={toggleCartOpen}>
                <Badge badgeContent={itemCount} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Tooltip>
            <CartDrawer />
            <div className={classes.sectionDesktop}>{renderDeskTopMenu}</div>
            <div className={classes.sectionMobile}>{renderMobileMenu}</div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleTheme: () => dispatch(toggleTheme()),
  toggleCartOpen: () => dispatch(toggleCartOpen()),
});

const mapStateToProps = createStructuredSelector({
  theme: selectThemeMode,
  currentUser: selectCurrentUser,
  categories: selectDirectorySections,
  itemCount: selectCartItemsCount,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
