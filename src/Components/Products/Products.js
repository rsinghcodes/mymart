import React from "react";
import useStyles from "./Style";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "../../Components/controls/Button";
import { Divider } from "@material-ui/core";

export default function Products({ product }) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.img}
            component="img"
            alt={product.name}
            image={product.src}
            title={product.name}
          />
          <CardContent style={{ paddingBottom: "0px" }}>
            <Typography
              variant="subtitle1"
              component="h2"
              className={classes.subtitle2}
            >
              {product.name}
            </Typography>
            <Divider />
            <div style={{ display: "flex", marginTop: "10px" }}>
              <Typography
                variant="subtitle2"
                component="h2"
                className={classes.body2}
              >
                <Box
                  fontWeight="fontWeightBold"
                  style={{ textDecoration: "line-through" }}
                >
                  MRP ${product.mrp}
                </Box>
              </Typography>
              <div className={classes.grow} />
              <Typography
                variant="subtitle2"
                component="h2"
                className={classes.body2}
              >
                <Box fontWeight="fontWeightBold">Save ${product.saveOffer}</Box>
              </Typography>
            </div>
            <Typography
              variant="subtitle2"
              component="h2"
              className={classes.body2}
            >
              <Box fontWeight="fontWeightBold">${product.sellingPrice}</Box>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button style={{ width: "100%" }} text="Add to cart" />
        </CardActions>
      </Card>
    </>
  );
}
