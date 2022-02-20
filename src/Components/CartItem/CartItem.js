import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
} from '@material-ui/core';

import useStyles from './CartItem.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia className={classes.media} image={imageUrl} title={name} />
      <CardContent>
        <Typography variant="body2" component="p">
          {name}
        </Typography>
        <Divider style={{ margin: '0.7rem 0rem' }} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p>Price: ${price}/item</p>
          <p>Quantity: {quantity}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartItem;
