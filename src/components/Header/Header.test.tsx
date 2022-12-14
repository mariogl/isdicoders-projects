import { screen } from "@testing-library/react";
import customRender from "../../testUtils";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When rendered", () => {
    test("Then it should show a h1 title 'ISDI Coders Projects'", () => {
      customRender(<Header />);

      const title = screen.queryByRole("heading", {
        level: 1,
        name: /isdi coders projects/i,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
