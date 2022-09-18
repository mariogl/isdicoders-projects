import { NavLink, useNavigate } from "react-router-dom";
import { logoutActionCreator } from "../../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { routes } from "../../routes";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): JSX.Element => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();

    dispatch(logoutActionCreator());
    localStorage.removeItem("token");
    navigate(routes.login);
  };

  return (
    <NavigationStyled>
      <ul>
        {user.isLoggedIn && (
          <>
            <li>
              <NavLink to={routes.challenges}>Challenges list</NavLink>
            </li>
            <li>
              <a href="logout" onClick={logout}>
                Logout
              </a>
            </li>
          </>
        )}
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
