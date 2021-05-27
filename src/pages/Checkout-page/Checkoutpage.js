import React from "react";
import {
  Divider,
  Typography,
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
} from "@material-ui/core";
import useStyles from "./Checkoutpage.styles";
import CheckoutItem from "../../Components/Checkout-Item/Checkout-Item";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../Redux/cart/cart.selectors";
import PaymentButton from "../../Components/PaymentButton/PaymentButton";

const Cartpage = ({ cartItems, total }) => {
  const netTotal = total === 0 ? "0" : total > 50 ? total : total + 2;
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
            <p>$ {total}</p>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <p>Shipping Cost:</p>
            <p>${total > 50 ? "00" : "2"}</p>
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
            {total > 50
              ? "You are eligible for free delivery."
              : "Shipping cost above $50 is free."}
          </Typography>

          <div
            style={{ width: "100%", marginTop: "12px", textAlign: "center" }}
          >
            <PaymentButton price={netTotal} />
          </div>
          <Card>
            <CardContent>
              <Typography variant="body2">
                Card Number: 4242 4242 4242 4242
              </Typography>
              <Typography variant="body2">Expiry: 01/22</Typography>
              <Typography variant="body2">CVV: 123</Typography>
            </CardContent>
          </Card>
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
