import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import useStyles from "./CartItem.styles";

const CartItem = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://i.ibb.co/M59yT7B/dairy-And-Bakery.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body1" component="p">
          Perfect party dish and a fun meal.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>
            <RemoveIcon />
          </Button>
          <Button>1</Button>
          <Button>
            <AddIcon />
          </Button>
        </ButtonGroup>
        <Button
          variant="contained"
          color="secondary"
          aria-label="remove from cart"
          className={classes.expand}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
