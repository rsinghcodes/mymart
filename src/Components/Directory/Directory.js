import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import { DirectoryContainer } from "./Directory.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../Redux/directory/directory.selectors";

const Directory = ({ categories }) => {
  return (
    <>
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
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
