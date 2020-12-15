import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useState, useEffect } from 'react'

import { COLORS } from '../../public/constant'

const scrollTopButtonFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.7;
  }
`

export default function ScrollToTopButton() {
  const [showScroll, setShowScroll] = useState(false);
  const scrollButtonStyle = { display: showScroll ? 'inline-flex' : 'none'}
  const ScrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  const checkScroll = () => {
      const pageScrolled = window.pageYOffset > 400;
  const pageNotScrolled = window.pageYOffset <= 400;

    if (!showScroll && pageScrolled){
      setShowScroll(true)    
    } else if (showScroll && pageNotScrolled){
      setShowScroll(false)    
    }   
  }
  React.useEffect(() => {
    window.addEventListener('scroll', checkScroll)
  })
  return <Button onClick={ScrollToTop} style={scrollButtonStyle}>Top</Button>
}

const Button = styled.button`
  align-items: center;
  position: fixed;
  left: 10px;
  bottom: 125px;
  width: 40px;
  height: 40px;
  background-color: ${COLORS.orange};
  border-radius: 10px;
  border: none;
  font-weight: bold;
  color: ${COLORS.white};
  opacity: 0.7;
  animation: ${scrollTopButtonFadeIn} 0.3s;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }
  @media (max-width: 768px) {
    left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

`