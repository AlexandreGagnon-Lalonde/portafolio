import styled from "styled-components";

export default function CollabImage() {
  return (
    <ImageContainer>
      <Image src={""} />
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
