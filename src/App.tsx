import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import useCheckLocalStorageToken from "./hooks/useCheckLocalStorageToken";
import { filterProjectsByTutorActionCreator } from "./redux/features/projects/projectsSlice";
import { useAppDispatch } from "./redux/hooks";
import { theme } from "./theme/theme";

const App = (): JSX.Element => {
  useCheckLocalStorageToken();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const filterByTutor = localStorage.getItem("filterByTutor");
    if (filterByTutor) {
      dispatch(filterProjectsByTutorActionCreator(filterByTutor));
    }
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </>
  );
};

export default App;
