import { Badge, IconButton, Tooltip } from "@material-ui/core";
import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../Redux/cart/cart.selectors";
import { toggleCartOpen } from "../../Redux/cart/cart.actions";

const CartIcon = ({ toggleCartOpen, itemCount }) => {
  return (
    <>
      <Tooltip title="Cart Items">
        <IconButton onClick={toggleCartOpen}>
          <Badge badgeContent={itemCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Tooltip>
    </>
  );
};

const mapDispatchToProps = (dispath) => ({
  toggleCartOpen: () => dispath(toggleCartOpen()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
