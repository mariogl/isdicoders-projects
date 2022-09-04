import { useState, ChangeEvent } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
interface Credentials {
  username: string;
  password: string;
}

const Login = (): JSX.Element => {
  const initialCredentials: Credentials = {
    username: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(initialCredentials);

  const changeCredentials = (event: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <form>
      <FormControl mb="6">
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          type="text"
          id="username"
          value={credentials.username}
          onChange={changeCredentials}
        />
      </FormControl>
      <FormControl mb="6">
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          type="password"
          id="password"
          value={credentials.password}
          onChange={changeCredentials}
        />
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
