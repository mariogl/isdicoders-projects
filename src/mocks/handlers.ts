import { rest } from "msw";
import mockProjects from "./projects";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}projects`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        projects: mockProjects,
      })
    )
  ),
];
