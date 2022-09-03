import { useAppSelector } from "../../redux/hooks";

const Projects = (): JSX.Element => {
  const projects = useAppSelector((state) => state.projects);

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>{project.name}</li>
      ))}
    </ul>
  );
};

export default Projects;
