import { screen } from "@testing-library/react";
import customRender from "../../testUtils";
import ChallengesPage from "./ChallengesPage";

describe("Given a ChallengesPage component", () => {
  describe("When rendered", () => {
    test("Then it should show a title 'Challenges List'", () => {
      customRender(<ChallengesPage />);

      const title = screen.queryByRole("heading", { name: /challenges list/i });

      expect(title).toBeInTheDocument();
    });
  });
});
