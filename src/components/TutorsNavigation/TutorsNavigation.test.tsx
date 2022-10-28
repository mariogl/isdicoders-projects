import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { Tutor } from "../../types";
import { renderWithProviders } from "../../utils/testUtils";
import TutorsNavigation from "./TutorsNavigation";
import { filterProjectsByTutorActionCreator } from "../../redux/features/projects/projectsSlice";

const mockDispatch = jest.fn();
jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a TutorsNavigation component", () => {
  describe("When it's rendered and the tutors are Luis and Marta", () => {
    const mockTutors: Tutor[] = [
      {
        id: "1",
        name: "Luis",
      },
      {
        id: "2",
        name: "Marta",
      },
    ];

    test("Then it should show a button 'Luis', a button 'Marta' and a button 'Todos'", () => {
      renderWithProviders(<TutorsNavigation />, {
        preloadedState: {
          tutors: mockTutors,
        },
      });

      const luisButton = screen.queryByRole("button", {
        name: mockTutors[0].name,
      });
      const martaButton = screen.queryByRole("button", {
        name: mockTutors[1].name,
      });
      const allButton = screen.queryByRole("button", {
        name: /todos/i,
      });

      expect(luisButton).toBeInTheDocument();
      expect(martaButton).toBeInTheDocument();
      expect(allButton).toBeInTheDocument();
    });

    describe("And the user clicks on the button 'Todos'", () => {
      test("Then it should call dispatch with a filterProjects action with '' as id", async () => {
        renderWithProviders(<TutorsNavigation />, {
          preloadedState: {
            tutors: mockTutors,
          },
        });
        const expectedAction = filterProjectsByTutorActionCreator("");

        const todosButton = screen.queryByRole("button", { name: /todos/i });
        await userEvent.click(todosButton!);

        expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
      });
    });
  });
});
