import React, { useState } from "react";
import useStyles, { MainLogo } from "./Header.styles";
import {
  SwipeableDrawer,
  Toolbar,
  AppBar,
  useMediaQuery,
  Badge,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import {
  Menu,
  Brightness4,
  Brightness7,
  ShoppingCart,
} from "@material-ui/icons";
import DrawerItems from "../DrawerItems/DrawerItems";
import CartDrawer from "../Cart-Drawer/Cart-Drawer";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleTheme } from "../../Redux/theme/theme.action";
import { selectThemeMode } from "../../Redux/theme/theme.selector";
import { selectCartItemsCount } from "../../Redux/cart/cart.selectors";
import { toggleCartOpen } from "../../Redux/cart/cart.actions";

function Header({ toggleTheme, theme, toggleCartOpen, itemCount }) {
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${theme})`);
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <div className={classes.grow}>
        <AppBar position="fixed" elevation={0}>
          <Toolbar className={classes.root}>
            <MainLogo to="/">mymart</MainLogo>
            <div className={classes.grow} />
            <Tooltip title="Switch to Dark/Light mode">
              <IconButton onClick={toggleTheme}>
                {prefersDarkMode ? <Brightness7 /> : <Brightness4 />}
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
            <IconButton
              edge="end"
              aria-label="open drawer"
              onClick={() => setDrawerOpen(true)}
            >
              <Menu />
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
                handleClick={handleClick}
              />
            </SwipeableDrawer>
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
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
