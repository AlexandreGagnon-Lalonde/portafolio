import styled from "styled-components";

export default function LungorImage() {
  return (
    <ImageContainer>
      <Image src={"/static/lungorFiller.png"} />
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  margin: 0 0 10px 0;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 20px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;
