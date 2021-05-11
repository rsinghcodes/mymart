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

const CheckoutItem = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={`https://i.ibb.co/M59yT7B/dairy-And-Bakery.jpg`}
              />
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
                  Aashirwaad Atta 5 kg Packet
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Multigrain with full of nutrition make you more energise.
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  MRP: ₹ 150
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4} container direction="column" spacing={2}>
              <Grid item style={pricingGrid}>
                <Typography variant="subtitle1">₹ 300.00</Typography>
              </Grid>

              <Grid item style={pricingGrid}>
                <ButtonGroup
                  color="primary"
                  aria-label="outlined primary button group"
                >
                  <Button>
                    <RemoveIcon />
                  </Button>
                  <Button>2</Button>
                  <Button>
                    <AddIcon />
                  </Button>
                </ButtonGroup>
              </Grid>
              <Grid item style={pricingGrid}>
                <Button variant="contained" color="secondary">
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

export default CheckoutItem;
