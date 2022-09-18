import { render, renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "./redux/store";
import { theme } from "./theme/theme";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const customRender = (ui: JSX.Element) => {
  return render(ui, { wrapper: Wrapper });
};

export default customRender;
