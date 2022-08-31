import { NavLink } from "react-router-dom";
import routes from "../../routes";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): JSX.Element => {
  return (
    <NavigationStyled>
      <ul>
        <li>
          <NavLink to={routes.projects}>Projects list</NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
