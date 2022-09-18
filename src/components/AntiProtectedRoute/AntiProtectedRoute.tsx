import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

interface AntiProtectedRouteProps {
  children: JSX.Element | JSX.Element[];
}

const AntiProtectedRoute = ({
  children,
}: AntiProtectedRouteProps): JSX.Element => {
  const user = useAppSelector((state) => state.user);
  return <>{user.isLoggedIn ? <Navigate to="/" /> : children}</>;
};

export default AntiProtectedRoute;
