import { Toolbar } from "@material-ui/core";
import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import { DirectoryContainer } from "./Directory.styles";
const sections = [
  {
    title: "Dairy & Bakery",
    imageUrl: "https://i.ibb.co/M59yT7B/dairy-And-Bakery.jpg",
    id: 1,
    linkUrl: "/Dairy-and-Bakery",
  },
  {
    title: "Atta, Flour & Sooji",
    imageUrl:
      "https://i.ibb.co/2M6KK1C/photo-1610725664285-7c57e6eeac3f-ixid-Mnwx-Mj-A3f-DB8-MHxz-ZWFy-Y2h8-MXx8-Zmxvd-XJ8-ZW58-MHx8-MHx8-i.jpg",
    id: 2,
    linkUrl: "/Dairy-and-Bakery",
  },
  {
    title: "Soap & Shampoo",
    imageUrl:
      "https://i.ibb.co/vz4T6TX/photo-1570040546652-7811017b628b-ixid-Mnwx-Mj-A3f-DB8-MHxz-ZWFy-Y2h8-MTh8f-HNv-YXAl-Mj-Bi-YXJ8-ZW58.jpg",
    id: 3,
    linkUrl: "/Dairy-and-Bakery",
  },
  {
    title: "Toilet & Sanitary",
    imageUrl:
      "https://i.ibb.co/0GvRqxN/photo-1585690359409-9020f3602bdb-ixid-Mnwx-Mj-A3f-DB8-MHxz-ZWFy-Y2h8-Mz-V8f-HRva-Wxld-CUy-MHBhc-GVyf.jpg",
    id: 4,
    linkUrl: "/Dairy-and-Bakery",
  },
];

const Directory = () => {
  return (
    <>
      <Toolbar />
      <DirectoryContainer>
        {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
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

export default Directory;
