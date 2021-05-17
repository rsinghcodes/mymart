import React from "react";
import useStyles from "./ProductCard.styles";
import {
  Button,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Divider,
} from "@material-ui/core";

import { connect } from "react-redux";
import { addItem } from "../../Redux/cart/cart.actions";

const ProductCard = ({ item, addItem, typeOfAction }) => {
  const classes = useStyles();
  const { name, price, imageUrl } = item;

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardMedia className={classes.media} image={imageUrl} title={name} />
        <CardContent>
          <Typography variant="body2" component="p">
            {name}
          </Typography>
          <Divider style={{ margin: "0.7rem 0rem" }} />
          <Typography variant="body2" component="p">
            Price: ₹ {price}
          </Typography>
        </CardContent>

        <CardActions>
          <Button style={{ width: "100%" }} onClick={() => addItem(item)}>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductCard);
