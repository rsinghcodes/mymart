import React from "react";
import useStyles, { pricingGrid } from "./Checkout-Item.styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  Typography,
  Paper,
  ButtonBase,
  ButtonGroup,
  Button,
  Grid,
} from "@material-ui/core";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../Redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={imageUrl} />
            </ButtonBase>
          </Grid>
          <Grid
            item
            xs={12}
            sm
            container
            style={{ justifyContent: "space-between" }}
          >
            <Grid item xs={12} md={8} container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Price: ₹{price} per Item
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4} container direction="column" spacing={2}>
              <Grid item style={pricingGrid}>
                <Typography variant="subtitle1">
                  Price: ₹{price * quantity}
                </Typography>
              </Grid>

              <Grid item style={pricingGrid}>
                <ButtonGroup
                  color="primary"
                  aria-label="outlined primary button group"
                >
                  <Button onClick={() => removeItem(cartItem)}>
                    <RemoveIcon />
                  </Button>
                  <Button>{quantity}</Button>
                  <Button onClick={() => addItem(cartItem)}>
                    <AddIcon />
                  </Button>
                </ButtonGroup>
              </Grid>
              <Grid item style={pricingGrid}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => clearItem(cartItem)}
                  disableElevation
                >
                  Remove
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
