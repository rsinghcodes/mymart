import React from "react";
import { Button, Drawer, IconButton } from "@material-ui/core";
import CartItem from "../CartItem/CartItem";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./Cart-Drawer.styles";
import { Link } from "react-router-dom";

const CartDrawer = ({ drawerOpen, setDrawerOpen }) => {
  const classes = useStyles();
  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon />
        </IconButton>
        <Button
          component={Link}
          to="/checkout"
          onClick={() => setDrawerOpen(false)}
        >
          Proceed to Checkout
        </Button>
      </div>
      <CartItem />
    </Drawer>
  );
};

export default CartDrawer;
