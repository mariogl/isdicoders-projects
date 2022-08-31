import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const customRender = (ui: JSX.Element) => {
  const Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return <BrowserRouter>{children}</BrowserRouter>;
  };

  return render(ui, { wrapper: Wrapper });
};

export default customRender;
