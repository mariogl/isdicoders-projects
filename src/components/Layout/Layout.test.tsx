import customRender from "../../testUtils";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When rendered", () => {
    test("Then it should render", () => {
      customRender(<Layout />);
    });
  });
});
