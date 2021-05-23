import React from "react";
import { connect } from "react-redux";

import ProductCard from "../../Components/ProductCard/ProductCard";

import { selectCollection } from "../../Redux/shop/shop.selectors";
import {
  CollectionPageContainer,
  Tittle,
  ItemsContainer,
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <Tittle>{title}</Tittle>
      <ItemsContainer>
        {items.map((item) => (
          <ProductCard key={item.id} item={item} typeOfAction={true} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
