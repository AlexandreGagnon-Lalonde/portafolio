import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Navigation from "../../../components/navigation/navigation";
import ScrollToTopButton from "../../../components/mainPage/ScrollToTopButton";

export default function ECommerce() {
  return (
    <>
      <Head>
        <title>OBA</title>
      </Head>
      <Navigation />
      <ScrollToTopButton />
      <ProjectHeader>
        <AppTitle>Wearables E-Commerce</AppTitle>
        <BagelzLogo><Image
            src={"/static/E-commerce/bagel.gif"}
            objectFit={"contain"}
            layout={"fill"}
            alt={"first sorting menu"}
          /></BagelzLogo>
      </ProjectHeader>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <Images>
        <MenuContainer>
          <Image
            src={"/static/E-commerce/sortMenu1.png"}
            objectFit={"contain"}
            layout={"fill"}
            alt={"first sorting menu"}
          />
        </MenuContainer>
        <MenuContainer>
          <Image
            src={"/static/E-commerce/sortMenu2.png"}
            objectFit={"contain"}
            layout={"fill"}
            alt={"first sorting menu"}
          />
        </MenuContainer>
      </Images>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <Images>
        <SingleItemContainer>
          <Image
            src={"/static/E-commerce/singleItemPage.png"}
            objectFit={"contain"}
            layout={"fill"}
            alt={"first sorting menu"}
          />
        </SingleItemContainer>
      </Images>
    </>
  );
}

const FirstPartOfProject = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
`;
const BagelzLogo = styled.div`
position: relative;
width: 150px;
height: 150px;
border: 1px solid red;

`
const AppTitle = styled.h3`
  width: 100%;
  text-shadow: 0px 0px 2px #101010;
  font-family: Georgia, serif;
  font-size: 1.5em;
  letter-spacing: 3px;
  word-spacing: 2px;
  color: #101010;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: small-caps;
  text-transform: none;
  margin: 60px 0 40px 60px;
  color: ${(props) => props.theme.projectPageTitle};

  @media (max-width: 768px) {
    margin: 60px auto 40px auto;
    text-align: center;
  }
`;
const Images = styled.div`
  display: flex;
  justify-content: space-around;
`;
const MenuContainer = styled.div`
  position: relative;
  width: 200px;
  height: 400px;
  border: 1px solid red;
`;
const SingleItemContainer = styled.div`
  position: relative;
  width: 800px;
  height: 400px;
  border: 1px solid red;
`;
