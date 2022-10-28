import { render, screen } from "@testing-library/react";
import ProdPreview from "./ProdPreview";

describe("Given a ProdPreview component", () => {
  describe("When rendered with 'https://test.com' url", () => {
    test("Then it should show an iframe loading the received url", () => {
      const url = "https://test.com/";

      render(<ProdPreview url={url} />);

      const iframe = screen.queryByTestId("iframe");

      expect(iframe).toBeInTheDocument();
      expect(iframe).toHaveProperty("src", url);
    });
  });
});
