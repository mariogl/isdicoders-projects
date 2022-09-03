import customRender from "../../testUtils";
import Projects from "./Projects";

describe("Given a Project component", () => {
  describe("When rendered", () => {
    test("Then it should ja'l farem", () => {
      customRender(<Projects />);
    });
  });
});
