import { rest } from "msw";
import { apiEndpoints } from "../routes";
import mockChallenges from "./challenges";
import mockProjects from "./projects";

export const handlers = [
  rest.post(apiEndpoints.loginUser, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: "token" }))
  ),
  rest.get(apiEndpoints.getChallenges, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        challenges: mockChallenges,
      })
    )
  ),
  rest.get(apiEndpoints.getProjects, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        projects: mockProjects,
      })
    )
  ),
];
