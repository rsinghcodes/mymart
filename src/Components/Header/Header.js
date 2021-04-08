import React, { useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useStyles from "./Style";
import Box from "@material-ui/core/Box";
import Button from "../controls/Button";
import {
  Badge,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  SwipeableDrawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "../../logo.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const Header = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <Link
            href="/"
            underline="none"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src={logo} alt="logo" style={{ width: "1.4rem" }} />
            <span
              style={{
                fontSize: "1.4rem",
                marginLeft: "0.5rem",
                color: "#001833",
                fontWeight: "bold",
              }}
            >
              buckstore
            </span>
          </Link>
          <div className={classes.grow} />
          <IconButton
            className={classes.menuButton}
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
          >
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Menu
                </ListSubheader>
              }
            >
              <ListItem button>
                <ListItem button>
                  <ListItemIcon>
                    <Badge badgeContent={10} color="secondary">
                      <ShoppingCartIcon style={{ color: "#001833" }} />
                    </Badge>
                  </ListItemIcon>
                  <ListItemText primary="Cart Items" />
                </ListItem>
              </ListItem>
              <ListItem button>
                <ListItem button>
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItem>
              </ListItem>
              <ListItem button>
                <ListItem button>
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sign-up" />
                </ListItem>
              </ListItem>
            </List>
          </SwipeableDrawer>
          <Box boxShadow={0} className={classes.navBox}>
            <IconButton
              aria-label="show cart items"
              style={{ marginRight: "1rem" }}
            >
              <Badge badgeContent={10} color="secondary">
                <ShoppingCartIcon style={{ color: "#001833" }} />
              </Badge>
            </IconButton>

            <Button text="Login / Sign-up" />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
