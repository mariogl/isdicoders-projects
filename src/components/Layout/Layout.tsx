import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";
import routes from "../../routes";
import Header from "../Header/Header";
import ContainerStyled from "./ContainerStyled";
import MainStyled from "./MainStyled";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <ContainerStyled>
        <MainStyled>
          <Routes>
            <Route path="/" element={<Navigate to={routes.login} />} />
            <Route path={routes.projects} element={<ProjectsPage />} />
            <Route path={routes.login} element={<LoginPage />} />
          </Routes>
        </MainStyled>
      </ContainerStyled>
    </>
  );
};

export default Layout;
