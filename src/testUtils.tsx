import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store as appStore } from "./redux/store";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const customRender = (ui: JSX.Element, store = appStore) => {
  const Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export default customRender;
