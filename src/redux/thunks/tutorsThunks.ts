import axios from "axios";
import { Dispatch } from "react";
import { apiEndpoints } from "../../routes";
import { Tutor } from "../../types";
import { loadTutorsActionCreator } from "../features/tutors/tutorsSlice";

export const loadTutorsThunk = () => async (dispatch: Dispatch<any>) => {
  const apiUrl = apiEndpoints.getUsers;
  const {
    data: { users: tutors },
  } = await axios.get<{ users: Tutor[] }>(apiUrl, {
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_TEMP_JWT}`,
    },
  });
  dispatch(
    loadTutorsActionCreator(tutors.filter((tutor) => tutor.name !== "Mario"))
  );
};
