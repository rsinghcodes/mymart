import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Divider,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import useStyles from "./CartItem.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia className={classes.media} image={imageUrl} title={name} />
      <CardContent>
        <Typography variant="body2" component="p">
          Perfect party dish and a fun meal.
        </Typography>
        <Divider style={{ margin: "0.7rem 0rem" }} />
        <Typography variant="body2" component="p">
          Price: ₹ {price}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>
            <RemoveIcon />
          </Button>
          <Button>{quantity}</Button>
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
