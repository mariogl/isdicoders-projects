import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
const Login = (): JSX.Element => {
  return (
    <form>
      <FormControl mb="6">
        <FormLabel>Username</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl mb="6">
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <FormControl>
        <Button bg="brand.600" color="#fff">
          Sign in
        </Button>
      </FormControl>
    </form>
  );
};

export default Login;
