import { Badge, IconButton, Tooltip } from "@material-ui/core";
import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CartDrawer from "../Cart-Drawer/Cart-Drawer";
// import { Link } from "react-router-dom";

const CartIcon = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleClickOpen = () => {
    setDrawerOpen(true);
  };
  return (
    <>
      <Tooltip title="Cart Items">
        {/* <IconButton component={Link} to="/checkout">
          <Badge badgeContent={10} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton> */}
        <IconButton onClick={handleClickOpen}>
          <Badge badgeContent={10} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <CartDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </>
  );
};

export default CartIcon;
