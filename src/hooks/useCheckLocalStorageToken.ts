import jwt_decode from "jwt-decode";
import { loginActionCreator } from "../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { User } from "../types";

const useCheckLocalStorageToken = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  if (user.isLoggedIn) {
    return;
  }

  const token = localStorage.getItem("token");
  if (token) {
    const userData: User = jwt_decode(token);
    dispatch(loginActionCreator(userData));
  }
};

export default useCheckLocalStorageToken;
