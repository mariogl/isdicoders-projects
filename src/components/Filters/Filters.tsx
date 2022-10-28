import { Button } from "@chakra-ui/react";
import { SyntheticEvent } from "react";
import { filterProjectsByCoverageActionCreator } from "../../redux/features/projects/projectsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import StyledButtonGroup from "../StyledButtonGroup/StyledButtonGroup";

const Filters = (): JSX.Element => {
  const currentCoverageFilter = useAppSelector(
    (state) => state.projects.filterByCoverage
  );
  const dispatch = useAppDispatch();

  const setFilterCoverage = (event: SyntheticEvent, type: string) => {
    event.preventDefault();

    if (type === currentCoverageFilter) {
      localStorage.removeItem("filterByCoverage");
      dispatch(filterProjectsByCoverageActionCreator(""));
    } else {
      localStorage.setItem("filterByCoverage", type);
      dispatch(filterProjectsByCoverageActionCreator(type));
    }
  };

  return (
    <div className="filters">
      <StyledButtonGroup size="sm">
        <Button
          onClick={(event) => setFilterCoverage(event, "low")}
          className={currentCoverageFilter === "low" ? "active" : ""}
        >
          Low coverage
        </Button>
        <Button
          onClick={(event) => setFilterCoverage(event, "high")}
          className={currentCoverageFilter === "high" ? "active" : ""}
        >
          High coverage
        </Button>
      </StyledButtonGroup>
    </div>
  );
};

export default Filters;
