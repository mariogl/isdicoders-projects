import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import Login from "./Login";
import mockCredentials from "../../mocks/credentials";
import customRender from "../../testUtils";

const mockDispatch = jest.fn();
jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch,
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const fillForm = async () => {
  const usernameInput = screen.queryByLabelText<HTMLInputElement>("Username");
  const passwordInput = screen.queryByLabelText<HTMLInputElement>("Password");

  await userEvent.type(usernameInput!, mockCredentials.username);
  await userEvent.type(passwordInput!, mockCredentials.password);

  return { usernameInput, passwordInput };
};

describe("Given a Login component", () => {
  describe("When rendered", () => {
    test("Then it should show credentials inputs", () => {
      customRender(<Login />);

      const usernameInput = screen.queryByLabelText("Username");
      const passwordInput = screen.queryByLabelText("Password");

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show a disabled button", () => {
      customRender(<Login />);

      const submitButton = screen.queryByRole("button", { name: /sign in/i });

      expect(submitButton).toBeDisabled();
    });

    describe("And the user enter its credentials", () => {
      test("Then the credentials appear inside the inputs", async () => {
        customRender(<Login />);

        const { usernameInput, passwordInput } = await fillForm();

        expect(usernameInput).toHaveValue(mockCredentials.username);
        expect(passwordInput).toHaveValue(mockCredentials.password);
      });

      test("Then it should show an enabled button", async () => {
        customRender(<Login />);

        await fillForm();
        const submitButton = screen.queryByRole("button", { name: /sign in/i });

        expect(submitButton).toBeEnabled();
      });

      describe("And the user submits the form", () => {
        test("Then it should call navigate", async () => {
          customRender(<Login />);

          await fillForm();
          const submitButton = screen.queryByRole("button", {
            name: /sign in/i,
          });

          await userEvent.click(submitButton!);

          expect(mockNavigate).toHaveBeenCalled();
        });
      });
    });
  });
});
