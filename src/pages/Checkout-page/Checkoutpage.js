import React from "react";
import {
  Divider,
  Typography,
  Grid,
  Paper,
  Box,
  Button,
} from "@material-ui/core";
import useStyles from "./Checkoutpage.styles";
import CheckoutItem from "../../Components/Checkout-Item/Checkout-Item";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../Redux/cart/cart.selectors";
import { Link } from "react-router-dom";

const Cartpage = ({ cartItems, total }) => {
  const netTotal = total === 0 ? "0" : total > 10 ? total : total + 2;
  const classes = useStyles();

  return (
    <Box className={classes.checkoutContainer}>
      <Grid item xs={12} md={9}>
        <Typography
          variant="h6"
          gutterBottom
          style={{
            marginTop: "1rem",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          Cart Items
        </Typography>
        <Divider />
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography
          variant="h6"
          gutterBottom
          style={{
            marginTop: "1rem",
            marginLeft: "0.2rem",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          Order Summary
        </Typography>
        <Divider style={{ marginBottom: "1rem" }} />
        <Paper className={classes.paper} elevation={0}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <p>Items Total:</p>
            <p>${total}</p>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <p>Shipping Cost:</p>
            <p>${total > 10 ? "00" : "2"}</p>
          </Grid>

          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <p>Net Payable:</p>
            <p>${netTotal}</p>
          </Grid>
          <Divider />
          <Typography
            variant="body2"
            component="p"
            style={{ marginTop: "12px" }}
          >
            {total > 10
              ? "You are eligible for free delivery."
              : "Shipping cost above $10 is free."}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            component={Link}
            to="/checkout/shipping"
            style={{ width: "100%", margin: "12px 0" }}
          >
            Continue to Shipping
          </Button>
        </Paper>
      </Grid>
    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Cartpage);
