import styled from "styled-components";

const WeeksStyled = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  > li {
    background-color: #eee;
    text-align: center;
    padding: 10px;
  }
`;

export default WeeksStyled;
