import React, { useState } from "react";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import useStyles, { MainLogo } from "./Header.styles";
import {
  Divider,
  SwipeableDrawer,
  IconButton,
  Toolbar,
  AppBar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DrawerItems from "../DrawerItems/DrawerItems";
import CartIcon from "../cart-icon/Cart-icon";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleTheme } from "../../Redux/theme/theme.action";
import { selectThemeMode } from "../../Redux/theme/theme.selector";

function Header({ toggleTheme, theme }) {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <div className={classes.grow}>
        <AppBar position="fixed" elevation={0}>
          <div
            style={{
              background: "#1f1f1f",
              padding: "8px 0",
              textAlign: "center",
            }}
          >
            <Typography variant="body2" style={{ color: "#f3f3f6" }}>
              Welcome! Currently shipping over India only...
            </Typography>
          </div>
          <Divider />
          <Toolbar className={classes.root}>
            <MainLogo to="/">mymart</MainLogo>
            <div className={classes.grow} />
            <Tooltip
              title={`Switch to ${theme === "light" ? "Light" : "Dark"} mode`}
            >
              <IconButton onClick={toggleTheme}>
                {theme === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>
            <CartIcon />
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
