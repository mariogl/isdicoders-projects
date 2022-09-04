import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When rendered", () => {
    test("Then it should show a heading 'Login'", () => {
      render(<LoginPage />);

      const title = screen.queryByRole("heading", { name: /login/i });

      expect(title).toBeInTheDocument();
    });
  });
});
