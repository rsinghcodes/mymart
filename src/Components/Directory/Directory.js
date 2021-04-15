import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import { DirectoryContainer } from "./Directory.styles";

const Directory = () => {
  return (
    <DirectoryContainer>
      <CategoryItem />
    </DirectoryContainer>
  );
};

export default Directory;
