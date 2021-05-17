import React from "react";
import { withRouter } from "react-router-dom";

import {
  CategotyItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./category-item.styles";

const CategoryItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <>
      <CategotyItemContainer
        size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
        <BackgroundImageContainer
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <ContentContainer className="content">
          <ContentTitle>{title.toUpperCase()}</ContentTitle>
          <ContentSubtitle>BUY NOW</ContentSubtitle>
        </ContentContainer>
      </CategotyItemContainer>
    </>
  );
};

export default withRouter(CategoryItem);
