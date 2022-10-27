import { Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import Challenges from "../../components/Challenges/Challenges";
import { useAppDispatch } from "../../redux/hooks";
import { loadChallengesThunk } from "../../redux/thunks/challengesThunks";

const ChallengesPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(loadChallengesThunk());
    })();
  });

  return (
    <>
      <Heading as="h2" size="lg" mb="5">
        Challenges list
      </Heading>
      <Challenges />
    </>
  );
};

export default ChallengesPage;
