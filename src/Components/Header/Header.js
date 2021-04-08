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
  // ListItemText,
  ListSubheader,
  SwipeableDrawer,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Header = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <Link href="#" underline="none">
            <Typography color="textPrimary">
              <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                Buck
              </span>
              Store
            </Typography>
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
                <Button text="Cart Items" size="small" />
              </ListItem>
              <ListItem button>
                <Button text="Login" size="small" />
              </ListItem>
              <ListItem button>
                <Button text="Sign-up" size="small" />
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
