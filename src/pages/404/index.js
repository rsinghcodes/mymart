import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <NotFoundImageOverlay>
      <NotFoundImageContainer imageUrl="./404.png" />
      <NotFoundImageText>Sorry, this page is not on the map</NotFoundImageText>
    </NotFoundImageOverlay>
  );
};

export default NotFound;

export const NotFoundImageOverlay = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NotFoundImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const NotFoundImageText = styled.h2`
  font-size: 20px;
  color: #2f8e89;
`;
