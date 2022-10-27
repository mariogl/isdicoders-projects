import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { challengesReducer } from "./features/challenges/challengesSlice";
import { projectsReducer } from "./features/projects/projectsSlice";
import { tutorsReducer } from "./features/tutors/tutorsSlice";
import { UiReducer } from "./features/ui/uiSlice";
import { userReducer } from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    challenges: challengesReducer,
    projects: projectsReducer,
    tutors: tutorsReducer,
    user: userReducer,
    ui: UiReducer,
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
