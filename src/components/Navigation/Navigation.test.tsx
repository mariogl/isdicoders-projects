import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import * as hooks from "../../redux/hooks";
import customRender from "../../testUtils";
import Navigation from "./Navigation";
import { logoutActionCreator } from "../../redux/features/user/userSlice";
import { routes } from "../../routes";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

beforeEach(() => {
  jest.restoreAllMocks();
});

describe("Given a Navigation component", () => {
  describe("When the user is logged in", () => {
    test("Then it should show a 'challenges list' and a 'logout' link", () => {
      const useAppSelectorSpy = jest.spyOn(hooks, "useAppSelector");
      useAppSelectorSpy.mockReturnValue({ isLoggedIn: true });

      customRender(<Navigation />);

      const challengesLink = screen.queryByRole("link", {
        name: /challenges list/i,
      });
      const logoutLink = screen.queryByRole("link", { name: /logout/i });

      expect(challengesLink).toBeInTheDocument();
      expect(logoutLink).toBeInTheDocument();
    });

    describe("And the user clicks on logout link", () => {
      test("Then it should call dispatch with logout action", async () => {
        const useAppDispatchSpy = jest.spyOn(hooks, "useAppDispatch");
        const useAppSelector = jest.spyOn(hooks, "useAppSelector");
        const dispatch = jest.fn();
        useAppDispatchSpy.mockReturnValue(dispatch);
        useAppSelector.mockReturnValue({ isLoggedIn: true });
        const logoutAction = logoutActionCreator();

        customRender(<Navigation />);

        const logoutLink = screen.getByRole("link", { name: /logout/i });
        await userEvent.click(logoutLink);

        expect(dispatch).toHaveBeenCalledWith(logoutAction);
      });

      test("Then it should call navigate with login route", async () => {
        const useAppSelector = jest.spyOn(hooks, "useAppSelector");
        useAppSelector.mockReturnValue({ isLoggedIn: true });

        customRender(<Navigation />);

        const logoutLink = screen.getByRole("link", { name: /logout/i });
        await userEvent.click(logoutLink);

        expect(mockNavigate).toHaveBeenCalledWith(routes.login);
      });
    });
  });

  describe("When the user is not logged in", () => {
    test("Then it shouldn't show a 'challenges list' nor a 'logout' link", () => {
      customRender(<Navigation />);

      const challengesLink = screen.queryByRole("link", {
        name: /challenges list/i,
      });
      const logoutLink = screen.queryByRole("link", { name: /logout/i });

      expect(challengesLink).not.toBeInTheDocument();
      expect(logoutLink).not.toBeInTheDocument();
    });
  });
});
