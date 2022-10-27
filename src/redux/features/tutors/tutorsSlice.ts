import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tutor } from "../../../types";

const initialTutors: Tutor[] = [];

const tutorsSlice = createSlice({
  name: "tutors",
  initialState: initialTutors,
  reducers: {
    loadTutors: (tutors: Tutor[], action: PayloadAction<Tutor[]>) => [
      ...action.payload,
    ],
  },
});

export const tutorsReducer = tutorsSlice.reducer;

export const { loadTutors: loadTutorsActionCreator } = tutorsSlice.actions;
