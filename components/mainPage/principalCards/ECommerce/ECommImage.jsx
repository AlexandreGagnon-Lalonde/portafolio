import styled from "styled-components";

export default function ECommImage() {
  return (
    <ImageContainer>
      <Image src={"/static/E-commerce/bagelzMainCard.png"} />
    </ImageContainer>
  );
}

const ImageContainer = styled.div``;
const Image = styled.img`
  width: 100%;
  border-radius: 20px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;
