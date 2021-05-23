import React from "react";
import {
  Divider,
  Typography,
  Grid,
  Paper,
  Button,
  Box,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./Checkoutpage.styles";
import CheckoutItem from "../../Components/Checkout-Item/Checkout-Item";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../Redux/cart/cart.selectors";

const Cartpage = ({ cartItems, total }) => {
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
            <p>₹ {total}</p>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <p>Shipping Cost:</p>
            <p>₹ {total > 800 ? "00" : "40"}</p>
          </Grid>

          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <p>Net Payable:</p>
            <p>₹ {total == "0" ? "0" : total > 800 ? total : total + 40}</p>
          </Grid>
          <Divider />
          <Typography
            variant="body2"
            component="p"
            style={{ marginTop: "12px" }}
          >
            {total > 800
              ? "You are eligible for free delivery."
              : "Shipping cost above ₹ 800 is free."}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<LockOutlinedIcon />}
            style={{ width: "100%", marginTop: "12px" }}
            disableElevation
          >
            Proceed to Pay
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
