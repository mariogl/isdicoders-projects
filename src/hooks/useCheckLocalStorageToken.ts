import { useCallback } from "react";
import jwt_decode from "jwt-decode";
import { loginActionCreator } from "../redux/features/user/userSlice";
import { useAppDispatch } from "../redux/hooks";
import { User } from "../types";

const useCheckLocalStorageToken = () => {
  const dispatch = useAppDispatch();

  const loginUserIfLocalStorageToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const userData: User = jwt_decode(token);

      dispatch(loginActionCreator(userData));
    }
  }, [dispatch]);

  return { loginUserIfLocalStorageToken };
};

export default useCheckLocalStorageToken;
