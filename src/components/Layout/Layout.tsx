import { Navigate, Route, Routes } from "react-router-dom";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";
import routes from "../../routes";
import Header from "../Header/Header";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to={routes.projects} />} />
          <Route path={routes.projects} element={<ProjectsPage />} />
        </Routes>
      </main>
    </>
  );
};

export default Layout;
