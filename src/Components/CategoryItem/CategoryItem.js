import React from "react";
import useStyles from "./CategoryItem.styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const images = [
  {
    url:
      "https://images.unsplash.com/photo-1590720537298-cfb8e200c819?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRhaXJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Dairy & Bakery",
  },
  {
    url:
      "https://images.unsplash.com/photo-1590720537298-cfb8e200c819?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRhaXJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Dairy & Bakery",
  },
  {
    url:
      "https://images.unsplash.com/photo-1531997977343-1f87cfb80578?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdyYWluc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Staples",
  },
  {
    url:
      "https://images.unsplash.com/photo-1531997977343-1f87cfb80578?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdyYWluc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Staples",
  },
  {
    url:
      "https://images.unsplash.com/photo-1570040546652-7811017b628b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c29hcCUyMGFuZCUyMHNoYW1wb298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Bath & Toilet",
  },
  {
    url:
      "https://images.unsplash.com/photo-1570040546652-7811017b628b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c29hcCUyMGFuZCUyMHNoYW1wb298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Bath & Toilet",
  },
];

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <>
      {images.map((image, index) => (
        <ButtonBase
          focusRipple
          key={index}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "31%",
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </>
  );
}
