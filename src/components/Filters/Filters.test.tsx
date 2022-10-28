import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Filters from "./Filters";
import { filterProjectsByCoverageActionCreator } from "../../redux/features/projects/projectsSlice";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a Filters component", () => {
  describe("When rendered with a filter by 'high' coverage", () => {
    test("Then it should show a 'Low coverage' button and a 'High coverage' button", () => {
      renderWithProviders(<Filters />);

      const lowCoverageButton = screen.queryByRole("button", {
        name: /low coverage/i,
      });
      const highCoverageButton = screen.queryByRole("button", {
        name: /high coverage/i,
      });

      expect(lowCoverageButton).toBeInTheDocument();
      expect(highCoverageButton).toBeInTheDocument();
    });

    describe("And the user clicks on the 'High coverage' button", () => {
      test("Then it should call dispatch with a filter by 'high' coverage action", async () => {
        renderWithProviders(<Filters />);
        const expectedAction = filterProjectsByCoverageActionCreator("high");

        const highCoverageButton = screen.queryByRole("button", {
          name: /high coverage/i,
        });
        await userEvent.click(highCoverageButton!);

        expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
      });
    });

    describe("And the user clicks on the 'Low coverage' button", () => {
      test.only("Then it should call dispatch with a filter by 'low' coverage action", async () => {
        renderWithProviders(<Filters />);
        const expectedAction = filterProjectsByCoverageActionCreator("low");

        const lowCoverageButton = screen.queryByRole("button", {
          name: /low coverage/i,
        });
        await userEvent.click(lowCoverageButton!);

        expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
      });
    });
  });
});
