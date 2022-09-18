import { useState, ChangeEvent, FormEvent } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { apiEndpoints, routes } from "../../routes";
import { useAppDispatch } from "../../redux/hooks";
import { loginActionCreator } from "../../redux/features/user/userSlice";
import jwtDecode from "jwt-decode";
import { User } from "../../types";
import axios from "axios";
interface Credentials {
  username: string;
  password: string;
}

const Login = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {
      data: { token },
    } = await axios.post(apiEndpoints.loginUser, credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    localStorage.setItem("token", token);

    const userData: User = jwtDecode(token);

    dispatch(loginActionCreator(userData));

    navigate(routes.projects);
  };

  const checkValidForm =
    credentials.username !== "" && credentials.password !== "";

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
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
        <Button
          bg="brand.600"
          color="#fff"
          type="submit"
          disabled={!checkValidForm}
        >
          Sign in
        </Button>
      </FormControl>
    </form>
  );
};

export default Login;
