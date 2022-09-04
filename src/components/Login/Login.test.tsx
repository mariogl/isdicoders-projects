import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Login from "./Login";
import mockCredentials from "../../mocks/credentials";

describe("Given a Login component", () => {
  describe("When rendered", () => {
    test("Then it should show credentials inputs", () => {
      render(<Login />);

      const usernameInput = screen.queryByLabelText("Username");
      const passwordInput = screen.queryByLabelText("Password");

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    describe("And the user enter its credentials", () => {
      test("Then the credentials appear inside the inputs", async () => {
        render(<Login />);

        const usernameInput =
          screen.queryByLabelText<HTMLInputElement>("Username");
        const passwordInput =
          screen.queryByLabelText<HTMLInputElement>("Password");

        await userEvent.type(usernameInput!, mockCredentials.username);
        await userEvent.type(passwordInput!, mockCredentials.password);

        expect(usernameInput).toHaveValue(mockCredentials.username);
        expect(passwordInput).toHaveValue(mockCredentials.password);
      });
    });
  });
});
