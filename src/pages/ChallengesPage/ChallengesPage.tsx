import axios from "axios";
import { Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import Challenges from "../../components/Challenges/Challenges";
import { loadChallengesActionCreator } from "../../redux/features/challenges/challengesSlice";
import { useAppDispatch } from "../../redux/hooks";
import { apiEndpoints } from "../../routes";

const ChallengesPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const {
        data: { challenges },
      } = await axios.get(apiEndpoints.getChallenges);
      dispatch(loadChallengesActionCreator(challenges));
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
