import { rest } from "msw";
import { apiEndpoints } from "../routes";
import mockProjects from "./projects";

export const handlers = [
  rest.get(apiEndpoints.getProjects, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        projects: mockProjects,
      })
    )
  ),
  rest.post(apiEndpoints.loginUser, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: "token" }))
  ),
];
