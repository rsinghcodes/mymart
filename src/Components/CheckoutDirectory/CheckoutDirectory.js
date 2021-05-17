import React from "react";
import { Divider, Typography, Grid, Paper, Button } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./CheckoutDirectory.styles";
import CheckoutItem from "../Checkout-Item/Checkout-Item";

export default function CheckoutDirectory() {
  const classes = useStyles();

  return (
    <>
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
        <CheckoutItem />
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
            <p>₹ 900.00</p>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <p>Shipping Cost:</p>
            <p>₹ 40.00</p>
          </Grid>

          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <p>Net Payable:</p>
            <p>₹ 940.00</p>
          </Grid>
          <Divider />
          <Button
            startIcon={<LockOutlinedIcon />}
            style={{ width: "100%", marginTop: "12px" }}
            disableElevation
          >
            Proceed to Buy
          </Button>
        </Paper>
      </Grid>
    </>
  );
}
