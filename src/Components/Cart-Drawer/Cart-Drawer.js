import React from "react";
import { Box, Button, Drawer, IconButton } from "@material-ui/core";
import CartItem from "../CartItem/CartItem";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./Cart-Drawer.styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartOpen,
} from "../../Redux/cart/cart.selectors";
import { toggleCartOpen } from "../../Redux/cart/cart.actions";

const CartDrawer = ({ drawerOpen, cartItems, history, toggleCartOpen }) => {
  const classes = useStyles();
  return (
    <Drawer anchor="right" open={drawerOpen} onClose={toggleCartOpen}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleCartOpen}>
          <CloseIcon />
        </IconButton>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={() => {
            history.push("/checkout");
            toggleCartOpen();
          }}
        >
          Proceed to Checkout
        </Button>
      </div>
      <div className={classes.cartItemBox}>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "80vh" }}
          >
            Your cart is empty
          </Box>
        )}
      </div>
    </Drawer>
  );
};

const mapDispatchToProps = (dispath) => ({
  toggleCartOpen: () => dispath(toggleCartOpen()),
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  drawerOpen: selectCartOpen,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDrawer)
);
