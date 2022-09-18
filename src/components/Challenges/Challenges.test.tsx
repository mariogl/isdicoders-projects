import customRender from "../../testUtils";
import Challenges from "./Challenges";

describe("Given a Challenges component", () => {
  describe("When rendered", () => {
    test("Then it should ja'l farem", () => {
      customRender(<Challenges />);
    });
  });
});
