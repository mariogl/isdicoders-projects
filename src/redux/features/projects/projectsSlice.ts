import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../../../types";

const initialProjects: Project[] = [];

const projectsSlice = createSlice({
  name: "projects",
  initialState: initialProjects,
  reducers: {
    loadProjects: (projects: Project[], action: PayloadAction<Project[]>) => [
      ...action.payload,
    ],
  },
});

export const projectsReducer = projectsSlice.reducer;

export const { loadProjects: loadProjectsActionCreator } =
  projectsSlice.actions;
