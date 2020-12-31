import styled from "styled-components";
import { YoutubeStyles } from "../../../../public/constant";

export default function OBAImage() {
  return (
    <ImageContainer>
      <iframe
        style={YoutubeStyles}
        src="https://www.youtube-nocookie.com/embed/B_FsLWXAr0w"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  position: relative;
  margin: 0 0 10px 0;
  padding-bottom: 56.25%;
`;
