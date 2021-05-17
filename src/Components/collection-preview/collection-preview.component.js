import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import {
  CollectionPreviewContainer,
  Title,
  PreviewContainer,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <Title>{title.toUpperCase()}</Title>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <ProductCard key={item.id} item={item} typeOfAction={true} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
