import { screen } from "@testing-library/react";
import customRender from "../../testUtils";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When rendered", () => {
    test("Then it should show a heading 'Login'", () => {
      customRender(<LoginPage />);

      const title = screen.queryByRole("heading", { name: /login/i });

      expect(title).toBeInTheDocument();
    });
  });
});
