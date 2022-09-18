import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { challengesReducer } from "./features/challenges/challengesSlice";
import { projectsReducer } from "./features/projects/projectsSlice";
import { userReducer } from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    challenges: challengesReducer,
    projects: projectsReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
