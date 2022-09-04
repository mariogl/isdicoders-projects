import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import theme from "./theme/theme";

const App = (): JSX.Element => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </>
  );
};

export default App;
