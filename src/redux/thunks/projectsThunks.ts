import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "react";
import { apiEndpoints } from "../../routes";
import { Project } from "../../types";
import {
  deleteProjectActionCreator,
  loadProjectsActionCreator,
} from "../features/projects/projectsSlice";

export const loadProjectsThunk =
  (challengeId: string, filterByCoverage: string) =>
  async (dispatch: Dispatch<PayloadAction<Project[]>>) => {
    const apiUrl = `${apiEndpoints.getProjects}/${challengeId}${
      filterByCoverage ? `?byCoverage=${filterByCoverage}` : ""
    }`;
    const { data } = await axios.get<{ projects: Project[] }>(apiUrl, {
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_TEMP_JWT}`,
      },
    });

    dispatch(loadProjectsActionCreator(data.projects));
  };

export const loadProjectsFilteredThunk =
  (challengeId: string, tutorId: string, filterByCoverage: string) =>
  async (dispatch: Dispatch<PayloadAction<Project[]>>) => {
    const apiUrl = `${
      apiEndpoints.getProjects
    }/${challengeId}/filter/tutor/${tutorId}${
      filterByCoverage ? `?byCoverage=${filterByCoverage}` : ""
    }`;
    const { data } = await axios.get<{ projects: Project[] }>(apiUrl, {
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_TEMP_JWT}`,
      },
    });

    dispatch(loadProjectsActionCreator(data.projects));
  };

export const deleteProjectThunk =
  (id: string) => async (dispatch: Dispatch<PayloadAction<string>>) => {
    return new Promise<void>(async (resolve, reject) => {
      const apiUrl = `${apiEndpoints.getProjects}/${id}`;
      const { status } = await axios.delete(apiUrl, {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_TEMPORARY_JWT}`,
        },
      });
      if (status === 200) {
        dispatch(deleteProjectActionCreator(id));
        resolve();
      }
    });
  };
