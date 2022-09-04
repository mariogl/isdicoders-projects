import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store as appStore } from "./redux/store";
import { theme } from "./theme/theme";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const customRender = (ui: JSX.Element, store = appStore) => {
  const Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Provider store={store}>{children}</Provider>
        </ThemeProvider>
      </BrowserRouter>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export default customRender;
