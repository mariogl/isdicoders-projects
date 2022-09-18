import axios from "axios";
import { useEffect } from "react";
import Projects from "../../components/Projects/Projects";
import { loadProjectsActionCreator } from "../../redux/features/projects/projectsSlice";
import { useAppDispatch } from "../../redux/hooks";
import { apiEndpoints } from "../../routes";

const ProjectsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const {
        data: { projects },
      } = await axios.get(apiEndpoints.getProjects);
      dispatch(loadProjectsActionCreator(projects));
    })();
  });

  return (
    <>
      <h2>Projects list</h2>
      <Projects />
    </>
  );
};

export default ProjectsPage;
