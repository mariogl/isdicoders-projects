import React from "react";
import { Button } from "@chakra-ui/react";
import { filterProjectsByTutorActionCreator } from "../../redux/features/projects/projectsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import StyledButtonGroup from "../StyledButtonGroup/StyledButtonGroup";

const TutorsNavigation = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector((state) => state.projects.filterByTutor);
  const tutors = useAppSelector((state) => state.tutors);

  const filter = (
    id: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    localStorage.setItem("filterByTutor", id);
    dispatch(filterProjectsByTutorActionCreator(id));
  };

  return (
    <nav>
      <StyledButtonGroup size="sm">
        {tutors.map(({ id, name }) => (
          <Button
            key={id}
            onClick={(event) => filter(id, event)}
            className={currentFilter === id ? "active" : ""}
          >
            {name}
          </Button>
        ))}
        <Button
          onClick={(event) => filter("", event)}
          className={currentFilter === "" ? "active" : ""}
        >
          Todos
        </Button>
      </StyledButtonGroup>
    </nav>
  );
};

export default TutorsNavigation;
