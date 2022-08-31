import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <h1>ISDI Coders Projects</h1>
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
