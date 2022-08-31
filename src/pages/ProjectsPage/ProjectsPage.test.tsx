import { render, screen } from "@testing-library/react";
import ProjectsPage from "./ProjectsPage";

describe("Given a ProjectsPage component", () => {
  describe("When rendered", () => {
    test("Then it should show a title 'Projects List'", () => {
      render(<ProjectsPage />);

      const title = screen.queryByRole("heading", { name: /projects list/i });

      expect(title).toBeInTheDocument();
    });
  });
});
