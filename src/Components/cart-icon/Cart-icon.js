import { Badge, IconButton, Tooltip } from "@material-ui/core";
import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const CartIcon = () => {
  return (
    <>
      <Tooltip title="Cart Items">
        <IconButton>
          <Badge badgeContent={10} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Tooltip>
    </>
  );
};

export default CartIcon;
