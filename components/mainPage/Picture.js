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
  grid-row: 1 / 3;
  display: flex;
  justify-content: left;
  align-items: center;
`;
