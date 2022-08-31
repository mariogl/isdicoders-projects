import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When rendered", () => {
    test("Then it should show a h1 title 'ISDI Coders Projects'", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const title = screen.queryByRole("heading", {
        level: 1,
        name: /isdi coders projects/i,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
