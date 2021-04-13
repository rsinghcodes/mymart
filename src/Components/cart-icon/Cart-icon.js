import { Badge } from "@material-ui/core";
import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const CartIcon = () => {
  return (
    <>
      <Badge badgeContent={10} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </>
  );
};

export default CartIcon;
