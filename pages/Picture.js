import React from "react";
import styled from "styled-components";

const Picture = () => {
  return (
    <ImageContainer>
      <Image src={"/assets/foxPicture.PNG"} />
    </ImageContainer>
  );
};

const Image = styled.img`
  display: block;
  margin: 0 auto;
  height: auto;
  width: 100%;
`;
const ImageContainer = styled.div`
  border-radius: 50%;
`;

export default Picture;
