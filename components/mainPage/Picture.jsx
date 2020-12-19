import React from "react";
import styled from "styled-components";

export default function Picture() {
  return (
    <ImageContainer>
      <Image src={"/static/mememe.jpg"} />
    </ImageContainer>
  );
}

const Image = styled.img`
  display: block;
  height: auto;
  width: 80%;
  border-radius: 10px;
`;
const ImageContainer = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: flex;
  justify-content: left;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;
