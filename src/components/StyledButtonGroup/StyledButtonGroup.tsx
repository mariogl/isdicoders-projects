import { ButtonGroup } from "@chakra-ui/react";
import styled from "styled-components";

const StyledButtonGroup = styled(ButtonGroup)`
  margin-bottom: 20px;
  display: flex;
  button {
    background-color: #888;
    border-color: #888;
    color: #fff;
    font-weight: normal;
    &.active {
      background-color: #111;
      border-color: #111;
      font-weight: bold;
    }
  }
`;

export default StyledButtonGroup;
