import { FormControl, FormLabel, Input } from "@chakra-ui/react";
const Login = (): JSX.Element => {
  return (
    <form>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input type="text" />
      </FormControl>
    </form>
  );
};

export default Login;
