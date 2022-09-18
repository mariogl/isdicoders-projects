import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../../../types";

const userInitialState: UserState = {
  id: "",
  name: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    login: (state: UserState, action: PayloadAction<User>) => ({
      id: action.payload.id,
      name: action.payload.name,
      isLoggedIn: true,
    }),
    logout: () => ({ ...userInitialState }),
  },
});

export const userReducer = userSlice.reducer;

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;
