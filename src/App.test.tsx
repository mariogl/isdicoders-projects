import { screen } from "@testing-library/react";
import App from "./App";
import customRender from "./testUtils";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show a h1 title 'ISDI Coders Projects'", () => {
      const expectedTitle = /isdi coders projects/i;
      localStorage.setItem("token", "test-token");

      customRender(<App />);

      const title = screen.queryByRole("heading", {
        level: 1,
        name: expectedTitle,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
