export const routes = {
  projects: "/projects",
  challenges: "/challenges",
  login: "/login",
};

export const apiEndpoints = {
  getProjects: `${process.env.REACT_APP_API_URL}projects`,
  getChallenges: `${process.env.REACT_APP_API_URL}challenges`,
  loginUser: `${process.env.REACT_APP_API_URL}users/login`,
};
