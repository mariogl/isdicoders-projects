import { Heading } from "@chakra-ui/react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { routes } from "../../routes";
import { Challenge, WeekStrings } from "../../types";
import ChallengeStyled from "./ChallengeStyled";
import WeeksStyled from "./WeeksStyled";

interface Accumulator {
  week1?: {
    challenges: Challenge[];
  };
  week2?: {
    challenges: Challenge[];
  };
  week3?: {
    challenges: Challenge[];
  };
  week4?: {
    challenges: Challenge[];
  };
  week5?: {
    challenges: Challenge[];
  };
  week6?: {
    challenges: Challenge[];
  };
  week7?: {
    challenges: Challenge[];
  };
  week8?: {
    challenges: Challenge[];
  };
  week9?: {
    challenges: Challenge[];
  };
}

const Challenges = (): JSX.Element => {
  const challenges = useAppSelector((state) => state.challenges);

  const groupedChallenges = useMemo(
    () =>
      challenges.reduce<Accumulator>((accumulator, challenge) => {
        const week: WeekStrings = `week${challenge.week}`;
        if (accumulator[week]) {
          accumulator[week]!.challenges.push(challenge);
        } else {
          accumulator[week] = {
            challenges: [challenge],
          };
        }

        return accumulator;
      }, {}),
    [challenges]
  );

  const orderedWeeks = useMemo(() => {
    return (Object.keys(groupedChallenges) as WeekStrings[]).sort();
  }, [groupedChallenges]);

  return (
    <WeeksStyled>
      {orderedWeeks.map((week) => (
        <li key={week}>
          <Heading as="h3" size="sm" mb="4">
            {week}
          </Heading>
          <ChallengeStyled>
            {(
              groupedChallenges[week] as {
                challenges: Challenge[];
              }
            ).challenges.map((challenge) => (
              <li key={challenge.id}>
                <Link to={`${routes.projects}/${challenge.id}`}>
                  {challenge.name.split("ch")[1].toUpperCase()}
                </Link>
              </li>
            ))}
          </ChallengeStyled>
        </li>
      ))}
    </WeeksStyled>
  );
};

export default Challenges;
