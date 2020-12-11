import styled from 'styled-components'
import * as Scroll from 'react-scroll'

import { COLORS } from '../../public/constant'

export default function ScrollToTopButton({ children }) {
  const scroll = Scroll.animateScroll;
  const ScrollOptions = {
    smooth: true,
    duration: 100,
  }
  const ScrollToTop = () => {
    scroll.scrollToTop(ScrollOptions);
  }

  return <Button onClick={ScrollToTop}>Top</Button>
}

const Button = styled.button`
  position: fixed;
  left: 10px;
  bottom: 75px;
  width: 50px;
  height: 30px;
  background-color: ${COLORS.blue};
`