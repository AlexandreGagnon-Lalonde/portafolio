import React from "react";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { CgArrowUpR } from "react-icons/cg";

export default function ScrollToTopButton() {
  const [showScroll, setShowScroll] = useState(false);

  const scrollButtonStyle = { display: showScroll ? "inline-flex" : "none" };

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkScroll = () => {
    const pageScrolled = window.pageYOffset > 400;
    const pageNotScrolled = window.pageYOffset <= 400;

    if (!showScroll && pageScrolled) {
      setShowScroll(true);
    } else if (showScroll && pageNotScrolled) {
      setShowScroll(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", checkScroll);
  });

  return (
    <Button onClick={ScrollToTop} style={scrollButtonStyle}>
      <CgArrowUpR
        style={{ transform: "scale(1.4)", display: "block", margin: "0 auto" }}
      />
    </Button>
  );
}

const scrollTopButtonFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.7;
  }
`;

const Button = styled.button`
  align-items: center;
  width: 40px;
  height: 40px;
  position: fixed;
  left: 10px;
  bottom: 10px;
  background-color: ${(props) => props.theme.scrollToTopBackground};
  border-radius: 10px;
  border: none;
  font-weight: bold;
  color: ${(props) => props.theme.scrollToTopColor};
  opacity: 0.7;
  animation: ${scrollTopButtonFadeIn} 0.3s;
  transition: all 0.3s;
  z-index: 1;

  &:hover {
    opacity: 1;
  }
  @media (max-width: 768px) {
    left: 0;
    bottom: 100px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
