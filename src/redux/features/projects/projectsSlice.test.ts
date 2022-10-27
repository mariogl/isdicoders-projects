import mockProjects from "../../../mocks/projects";
import { Project } from "../../../types";
import { loadProjectsActionCreator, projectsReducer } from "./projectsSlice";

describe("Given a projectsReducer reducer", () => {
  describe("When it receives an empty projects list and a loadProjects action with two projects", () => {
    test("Then it should return the two projects", () => {
      const projects: Project[] = mockProjects;

      const newProjects = projectsReducer(
        {
          projects: [],
          filterByTutor: "",
          filterByCoverage: "",
        },
        loadProjectsActionCreator(projects)
      );

      expect(newProjects).toStrictEqual(projects);
    });
  });
});
