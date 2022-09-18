import { Challenge } from "../../../types";
import {
  loadChallengesActionCreator,
  challengesReducer,
} from "./challengesSlice";

describe("Given a challengesReducer reducer", () => {
  describe("When it receives an empty challenges list and a loadChallenges action with two challenges", () => {
    test("Then it should return the two challenges", () => {
      const challenges: Challenge[] = [
        {
          id: "1",
          name: "Challenge 1",
          week: 1,
        },
        {
          id: "2",
          name: "Challenge 2",
          week: 1,
        },
      ];

      const newChallenges = challengesReducer(
        [],
        loadChallengesActionCreator(challenges)
      );

      expect(newChallenges).toStrictEqual(challenges);
    });
  });
});
