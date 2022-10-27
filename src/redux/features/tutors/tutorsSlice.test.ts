import { Tutor } from "../../../types";
import { loadTutorsActionCreator, tutorsReducer } from "./tutorsSlice";

describe("Given a tutorsReducer reducer", () => {
  describe("When it receives an empty tutors list and a loadTutors action with two tutors", () => {
    test("Then it should return the two tutors", () => {
      const tutors: Tutor[] = [
        {
          id: "1",
          name: "Tutor 1",
        },
        {
          id: "2",
          name: "Tutor 2",
        },
      ];

      const newTutors = tutorsReducer([], loadTutorsActionCreator(tutors));

      expect(newTutors).toStrictEqual(tutors);
    });
  });
});
