import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { routes } from "../../routes";

interface ProtectedRouteProps {
  children: JSX.Element | JSX.Element[];
}

const ProtectedRoute = ({ children }: ProtectedRouteProps): JSX.Element => {
  const user = useAppSelector((state) => state.user);

  return <>{user.isLoggedIn ? children : <Navigate to={routes.login} />}</>;
};

export default ProtectedRoute;
