import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Challenge } from "../../../types";

const initialChallenges: Challenge[] = [];

const challengesSlice = createSlice({
  name: "challenges",
  initialState: initialChallenges,
  reducers: {
    loadChallenges: (
      challenges: Challenge[],
      action: PayloadAction<Challenge[]>
    ) => [
      ...action.payload.map((challenge) => ({
        ...challenge,
        name: challenge.name.toLowerCase(),
      })),
    ],
  },
});

export const challengesReducer = challengesSlice.reducer;

export const { loadChallenges: loadChallengesActionCreator } =
  challengesSlice.actions;
