import { User, UserState } from "../../../types";
import {
  loginActionCreator,
  logoutActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a userReducer reducer", () => {
  describe("When it receives a login action with user data", () => {
    test("Then it should return isLoggedIn true and the user data", () => {
      const userData: User = {
        id: "111",
        name: "Luis",
      };

      const newUserState = userReducer(
        {} as UserState,
        loginActionCreator(userData)
      );

      expect(newUserState).toEqual({ ...userData, isLoggedIn: true });
    });
  });

  describe("When it receives a logout action", () => {
    test("Then it should return isLoggedIn false", () => {
      const newUserState = userReducer({} as UserState, logoutActionCreator());

      expect(newUserState).toHaveProperty("isLoggedIn", false);
    });
  });
});
