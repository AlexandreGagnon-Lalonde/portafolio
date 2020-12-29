import styled, { keyframes } from "styled-components";
import React from "react";
import { Technologies } from "../../public/constant";

export default function CarouselComponent() {
  return (
    <TickerContainer>
      <MarqueeContainer>
        {Technologies.map((tech) => {
          return <TickerImage src={tech.src} />;
        })}
        {Technologies.map((tech) => {
          return <TickerImage src={tech.src} />;
        })}
        {Technologies.map((tech) => {
          return <TickerImage src={tech.src} />;
        })}
      </MarqueeContainer>
    </TickerContainer>
  );
}

const marquee = keyframes`
  100% {
    transform: translateX(-${Technologies.length * 240}px);
  }
`;
const TickerImage = styled.img`
  width: 200px;
  display: inline-block;
  margin: 0 20px;

  @media (max-width: 768px) {
    max-width: 100px;
  }
`;
const TickerContainer = styled.div`
  background: ${props => props.theme.techCarouselGradient};
  height: 300px;
  max-width: 100%;
  margin: 30px auto 0 auto;
  overflow: hidden;
  position: relative;
  @media (max-width: 768px) {
    height: 139px;
  }
`;
const MarqueeContainer = styled.div`
  animation: ${marquee} 30s linear infinite;
  height: 100%;
  width: 10000px;
  position: absolute;
  overflow-x: hidden;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
`;
