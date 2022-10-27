import { Navigate, Route, Routes } from "react-router-dom";
import ChallengesPage from "../../pages/ChallengesPage/ChallengesPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";
import { routes } from "../../routes";
import AntiProtectedRoute from "../AntiProtectedRoute/AntiProtectedRoute";
import Header from "../Header/Header";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ContainerStyled from "./ContainerStyled";
import MainStyled from "./MainStyled";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <ContainerStyled>
        <MainStyled>
          <Routes>
            <Route path="/" element={<Navigate to={routes.challenges} />} />
            <Route
              path={routes.challenges}
              element={
                <ProtectedRoute>
                  <ChallengesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${routes.projects}/:challengeId`}
              element={
                <ProtectedRoute>
                  <ProjectsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={routes.login}
              element={
                <AntiProtectedRoute>
                  <LoginPage />
                </AntiProtectedRoute>
              }
            />
          </Routes>
        </MainStyled>
      </ContainerStyled>
    </>
  );
};

export default Layout;
