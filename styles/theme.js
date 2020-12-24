import { COLORS } from '../public/constant';

export const lightTheme = {
  body: "#fbf6f0",
  text: '#101010',
  contactBackground: COLORS.blue,
  contactGradient: `linear-gradient(0deg, ${COLORS.blue} 50%, ${COLORS.white} 100%)`,
  contactIconColor: COLORS.white,
  contactIconBackground: COLORS.orange,
  contactIconHoverColor: COLORS.white,
  scrollToTopBackground: COLORS.orange,
  scrollToTopColor: COLORS.white,
}

export const darkTheme = {
  body: "#666",
  text: '#fafafa',
  contactBackground: COLORS.darkModeGrey,
  contactGradient: `linear-gradient(0deg, ${COLORS.darkModeGrey} 50%, ${COLORS.darkModeBlack} 100%)`,
  contactIconColor: COLORS.darkModeWhite,
  contactIconBackground: COLORS.darkModeOrange,
  contactIconHoverColor: COLORS.darkModeWhite,
  scrollToTopBackground: COLORS.darkModeOrange,
  scrollToTopColor: COLORS.darkModeWhite,
}