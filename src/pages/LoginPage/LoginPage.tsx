import { Heading } from "@chakra-ui/react";
import Login from "../../components/Login/Login";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <Heading size="lg" mb="5">
        Login
      </Heading>
      <Login />
    </>
  );
};

export default LoginPage;
