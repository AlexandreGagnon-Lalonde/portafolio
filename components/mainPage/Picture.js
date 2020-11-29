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
  width: 80%;
  border-radius: 10px;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
