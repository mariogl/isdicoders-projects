import { Heading } from "@chakra-ui/react";
import ContainerStyled from "../Layout/ContainerStyled";
import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <ContainerStyled className="header__inner">
        <Heading as="h1">ISDI Coders Projects</Heading>
        <Navigation />
      </ContainerStyled>
    </HeaderStyled>
  );
};

export default Header;
