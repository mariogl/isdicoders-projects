import { Grid } from "@chakra-ui/react";
import { useAppSelector } from "../../redux/hooks";
import ProjectCard from "../ProjectCard/ProjectCard";
import FullWidthContainerStyled from "./FullWidthContainerStyled";

const colors = [
  { color: "#d50158", theme: "dark" },
  { color: "#8900a6", theme: "dark" },
  { color: "#3330a3", theme: "dark" },
  { color: "#0084d6", theme: "dark" },
  { color: "#009baa", theme: "dark" },
  { color: "#007e6b", theme: "dark" },
  { color: "#009534", theme: "dark" },
  { color: "#abb901", theme: "light" },
  { color: "#ffc100", theme: "light" },
  { color: "#ff7101", theme: "light" },
  { color: "#f92801", theme: "dark" },
  { color: "#d50158", theme: "dark" },
  { color: "#8900a6", theme: "dark" },
  { color: "#3330a3", theme: "dark" },
  { color: "#0084d6", theme: "dark" },
  { color: "#009baa", theme: "dark" },
  { color: "#007e6b", theme: "dark" },
  { color: "#009534", theme: "dark" },
  { color: "#abb901", theme: "light" },
  { color: "#ffc100", theme: "light" },
  { color: "#ff7101", theme: "light" },
  { color: "#f92801", theme: "dark" },
  { color: "#d50158", theme: "dark" },
  { color: "#8900a6", theme: "dark" },
  { color: "#3330a3", theme: "dark" },
  { color: "#0084d6", theme: "dark" },
  { color: "#009baa", theme: "dark" },
  { color: "#007e6b", theme: "dark" },
  { color: "#009534", theme: "dark" },
  { color: "#abb901", theme: "light" },
  { color: "#ffc100", theme: "light" },
  { color: "#ff7101", theme: "light" },
  { color: "#f92801", theme: "dark" },
];

const Projects = (): JSX.Element => {
  const { projects } = useAppSelector((state) => state.projects);
  const compactMode = useAppSelector((state) => state.ui.compactMode);

  return (
    <>
      <span>{projects.length} projects</span>
      <FullWidthContainerStyled>
        <Grid
          templateColumns={`repeat(${compactMode ? 3 : 1}, 1fr)`}
          as="ul"
          className="projects-list"
        >
          {projects.map((project, i) => (
            <li key={project._id} className="container-card">
              <ProjectCard project={project} backgroundColor={colors[i]} />
            </li>
          ))}
        </Grid>
      </FullWidthContainerStyled>
    </>
  );
};

export default Projects;
