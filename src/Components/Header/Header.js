import React, { useState } from "react";
import CartIcon from "../cart-icon/Cart-icon";
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
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DrawerItems from "../DrawerItems/DrawerItems";

export default function Header({ handleThemeModeClick, themeMode }) {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={classes.grow}>
        <AppBar position="fixed" elevation={0}>
          <Toolbar className={classes.root}>
            <MainLogo to="/">mymart</MainLogo>
            <div className={classes.grow} />
            <Tooltip
              title={`Switch to ${
                themeMode === "light" ? "Light" : "Dark"
              } mode`}
            >
              <IconButton onClick={handleThemeModeClick}>
                {themeMode === "light" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
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
                open={open}
              />
            </SwipeableDrawer>
          </Toolbar>
          <Divider />
        </AppBar>
      </div>
    </>
  );
}
