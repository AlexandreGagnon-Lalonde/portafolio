import { COLORS } from "../public/constant";

export const lightTheme = {
  body: COLORS.white,
  text: COLORS.black,
  contactBackground: COLORS.blue,
  contactGradient: `linear-gradient(0deg, ${COLORS.blue} 50%, ${COLORS.white} 100%)`,
  contactIconColor: COLORS.white,
  contactIconBackground: COLORS.orange,
  contactIconHoverColor: COLORS.white,
  scrollToTopBackground: COLORS.orange,
  scrollToTopColor: COLORS.white,
  techCarouselBackground: COLORS.white,
  navigationBackground: COLORS.blue,
  navigationProjectLinkColor: COLORS.white,
  navigationProjectLinkHoverColor: COLORS.orange,
  navigationHomeLinkColor: COLORS.white,
  navigationHomeLinkBackground: COLORS.blue,
  navigationHomeLinkHoverColor: COLORS.orange,
  navigationContactLinkColor: COLORS.white,
  navigationContactLinkHoverColor: COLORS.orange,
  navigationAboutMeLinkColor: COLORS.white,
  navigationAboutMeLinkHoverColor: COLORS.orange,
  presentationNameEmphasisColor: COLORS.orange,
  mainCardBackground: COLORS.yellow,
  mainCardLinkColor: COLORS.white,
  mainCardLinkHoverColor: COLORS.orange,
  mainCardTextColor: COLORS.black,
  mainCardBorder: `none`,
  carouselArrow: COLORS.orange,
  colorModeButton: COLORS.black,
  colorModeButtonHover: COLORS.orange,
};

export const darkTheme = {
  body: COLORS.darkModeBlack,
  text: COLORS.darkModeWhite,
  contactBackground: COLORS.darkModeGrey,
  contactGradient: `linear-gradient(0deg, ${COLORS.darkModeGrey} 50%, ${COLORS.darkModeBlack} 100%)`,
  contactIconColor: COLORS.darkModeWhite,
  contactIconBackground: COLORS.darkModeOrange,
  contactIconHoverColor: COLORS.darkModeWhite,
  scrollToTopBackground: COLORS.darkModeOrange,
  scrollToTopColor: COLORS.darkModeWhite,
  techCarouselBackground: COLORS.darkModeWhite,
  navigationBackground: COLORS.darkModeWhite,
  navigationProjectLinkColor: COLORS.darkModeGrey,
  navigationProjectLinkHoverColor: COLORS.darkModeOrange,
  navigationHomeLinkColor: COLORS.darkModeGrey,
  navigationHomeLinkBackground: COLORS.darkModeWhite,
  navigationHomeLinkHoverColor: COLORS.darkModeOrange,
  navigationContactLinkColor: COLORS.darkModeGrey,
  navigationContactLinkHoverColor: COLORS.darkModeOrange,
  navigationAboutMeLinkColor: COLORS.darkModeGrey,
  navigationAboutMeLinkHoverColor: COLORS.darkModeOrange,
  presentationNameEmphasisColor: COLORS.darkModeOrange,
  mainCardBackground: COLORS.darkModeWhite,
  mainCardLinkColor: COLORS.darkModeBlack,
  mainCardLinkHoverColor: COLORS.darkModeOrange,
  mainCardTextColor: COLORS.darkModeBlack,
  mainCardBorder: `1px solid ${COLORS.darkModeWhite}`,
  carouselArrow: COLORS.darkModeWhite,
  colorModeButton: COLORS.darkModeBlack,
  colorModeButtonHover: COLORS.darkModeOrange,
};
