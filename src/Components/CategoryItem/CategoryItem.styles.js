import styled from "styled-components";

export const Card = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 340px;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: hidden;
  border: 1px solid #f2f8f9;

  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 10px 15px rgba(38, 38, 38, 0.2);
    top: -4px;
    border: 2px solid #cccccc;
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #00838d;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(2);
    transform-origin: 50% 50%;
    transition: transform 0.15s ease-out;
  }

  &:hover:before {
    transform: scale(2.15);
  }

  @media (max-width: 600px) {
    height: 280px;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: saturate(120%);
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Title = styled.h3`
  position: absolute;
  bottom: 15px;
  left: 15px;
  background-color: white;
  color: #001833;
  padding: 20px 30px;
  border-radius: 4px;
`;

export const GoCorner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 32px;
  height: 32px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: #00838d;
  border-radius: 0 4px 0 32px;
`;

export const GoArrow = styled.div`
  margin-top: -4px;
  margin-right: -4px;
  color: white;
`;
