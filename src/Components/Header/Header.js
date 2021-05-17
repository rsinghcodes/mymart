import React, { useState } from "react";
import useStyles, { MainLogo } from "./Header.styles";
import {
  SwipeableDrawer,
  IconButton,
  Toolbar,
  AppBar,
  Tooltip,
  useMediaQuery,
  Divider,
} from "@material-ui/core";
import { Menu, Brightness4, Brightness7 } from "@material-ui/icons";
import DrawerItems from "../DrawerItems/DrawerItems";
import CartIcon from "../cart-icon/Cart-icon";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleTheme } from "../../Redux/theme/theme.action";
import { selectThemeMode } from "../../Redux/theme/theme.selector";

function Header({ toggleTheme, theme }) {
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
            <CartIcon />
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
          <Divider />
        </AppBar>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleTheme: () => dispatch(toggleTheme()),
});

const mapStateToProps = createStructuredSelector({
  theme: selectThemeMode,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
