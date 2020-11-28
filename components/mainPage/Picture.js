import React from "react";
import styled from "styled-components";

export default function Picture() {
  return (
    <ImageContainer>
      <Image src={"/assets/mememe.jpg"} />
    </ImageContainer>
  );
}

const Image = styled.img`
  display: block;
  margin: 0 auto;
  height: auto;
  width: 400px;
  border-radius: 50%;
`;
const ImageContainer = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
