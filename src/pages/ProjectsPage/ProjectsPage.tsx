import { Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Filters from "../../components/Filters/Filters";
import Projects from "../../components/Projects/Projects";
import Toolbar from "../../components/Toolbar/Toolbar";
import TutorsNavigation from "../../components/TutorsNavigation/TutorsNavigation";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  loadProjectsFilteredThunk,
  loadProjectsThunk,
} from "../../redux/thunks/projectsThunks";
import { loadTutorsThunk } from "../../redux/thunks/tutorsThunks";

const ProjectsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { challengeId } = useParams<{ challengeId: string }>();
  const { filterByTutor, filterByCoverage } = useAppSelector(
    (state) => state.projects
  );

  useEffect(() => {
    (async () => {
      dispatch(loadTutorsThunk());
    })();
  }, [challengeId, dispatch]);

  useEffect(() => {
    if (filterByTutor) {
      dispatch(
        loadProjectsFilteredThunk(
          challengeId as string,
          filterByTutor,
          filterByCoverage
        )
      );
    } else {
      dispatch(loadProjectsThunk(challengeId as string, filterByCoverage));
    }
  }, [challengeId, dispatch, filterByCoverage, filterByTutor]);

  return (
    <>
      <Heading as="h2" size="lg" mb="5">
        Projects list
      </Heading>
      <Filters />
      <TutorsNavigation />
      <Toolbar />
      <Projects />
    </>
  );
};

export default ProjectsPage;
