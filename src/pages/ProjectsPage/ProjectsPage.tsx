import { useEffect } from "react";
import { loadProjectsActionCreator } from "../../redux/features/projects/projectsSlice";
import { useAppDispatch } from "../../redux/hooks";

const ProjectsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}projects`);
      const projectsAPI = await response.json();

      dispatch(loadProjectsActionCreator(projectsAPI));
    })();
  });
  return <h2>Projects list</h2>;
};

export default ProjectsPage;
