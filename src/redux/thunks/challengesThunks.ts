import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "react";
import { apiEndpoints } from "../../routes";
import { Challenge } from "../../types";
import { loadChallengesActionCreator } from "../features/challenges/challengesSlice";

export const loadChallengesThunk =
  () => async (dispatch: Dispatch<PayloadAction<Challenge[]>>) => {
    const { data } = await axios.get<{ challenges: Challenge[] }>(
      apiEndpoints.getChallenges,
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_TEMP_JWT}`,
        },
      }
    );
    dispatch(loadChallengesActionCreator(data.challenges));
  };
