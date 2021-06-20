import React from "react";
import { withRouter } from "react-router-dom";
import {
  Card,
  BackgroundImageContainer,
  Title,
  GoCorner,
  GoArrow,
} from "./CategoryItem.styles";

const CategoryItem = ({ title, imageUrl, history, linkUrl, match }) => {
  return (
    <Card onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImageContainer
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Title>{title}</Title>
      <GoCorner>
        <GoArrow>→</GoArrow>
      </GoCorner>
    </Card>
  );
};

export default withRouter(CategoryItem);
