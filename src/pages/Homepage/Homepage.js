import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CategoryItem from "../../Components/CategoryItem/CategoryItem";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../Redux/directory/directory.selectors";
import { Button } from "@material-ui/core";

const Homepage = ({ categories }) => {
  return (
    <HomeContainer>
      <Title>Bringing you the best groceries</Title>
      <Button
        variant="contained"
        color="secondary"
        disableElevation
        component={Link}
        to="/shop"
        style={{ margin: "0 auto 50px" }}
      >
        View all groceries
      </Button>
      <DirectoryContainer>
        {categories.map(({ title, imageUrl, id, size, linkUrl }) => (
          <CategoryItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        ))}
      </DirectoryContainer>
    </HomeContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectDirectorySections,
});

export default connect(mapStateToProps)(Homepage);

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const DirectoryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 540px) {
    margin-bottom: 2.5rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Title = styled.h2`
  font-size: 35px;
  text-align: center;

  @media (max-width: 320px) {
    font-size: 28px;
  }
`;
