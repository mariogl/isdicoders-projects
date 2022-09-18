import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import useCheckLocalStorageToken from "./hooks/useCheckLocalStorageToken";
import { theme } from "./theme/theme";

const App = (): JSX.Element => {
  const { loginUserIfLocalStorageToken } = useCheckLocalStorageToken();

  useEffect(() => {
    loginUserIfLocalStorageToken();
  }, [loginUserIfLocalStorageToken]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </>
  );
};

export default App;
