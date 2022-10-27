import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../../../types";

interface ProjectsState {
  projects: Project[];
  filterByTutor: string;
  filterByCoverage: string;
}

const initialState: ProjectsState = {
  projects: [],
  filterByTutor: "",
  filterByCoverage: "",
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    loadProjects: (
      projectsState: ProjectsState,
      action: PayloadAction<Project[]>
    ) => ({
      ...projectsState,
      projects: action.payload,
    }),
    deleteProject: (
      projectsState: ProjectsState,
      action: PayloadAction<string>
    ): ProjectsState => ({
      ...projectsState,
      projects: projectsState.projects.filter(
        (project) => project.id !== action.payload
      ),
    }),
    filterProjectsByTutor: (
      projectsState: ProjectsState,
      action: PayloadAction<string>
    ): ProjectsState => ({
      ...projectsState,
      filterByTutor: action.payload,
    }),
    filterProjectsByCoverage: (
      projectsState: ProjectsState,
      action: PayloadAction<string>
    ): ProjectsState => ({
      ...projectsState,
      filterByCoverage: action.payload,
    }),
  },
});

export const projectsReducer = projectsSlice.reducer;

export const {
  loadProjects: loadProjectsActionCreator,
  deleteProject: deleteProjectActionCreator,
  filterProjectsByTutor: filterProjectsByTutorActionCreator,
  filterProjectsByCoverage: filterProjectsByCoverageActionCreator,
} = projectsSlice.actions;
