import { Project } from "../../../types/interfaces";
import { loadProjectsActionCreator, projectsReducer } from "./projectsSlice";

describe("Given a projectsReducer reducer", () => {
  describe("When it receives an empty projects list and a loadProjects action with two projects", () => {
    test("Then it should return the two projects", () => {
      const projects: Project[] = [
        {
          id: "1",
          name: "Project 1",
        },
        {
          id: "2",
          name: "Project 2",
        },
      ];

      const newProjects = projectsReducer(
        [],
        loadProjectsActionCreator(projects)
      );

      expect(newProjects).toStrictEqual(projects);
    });
  });
});
