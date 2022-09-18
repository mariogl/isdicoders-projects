import styled from "styled-components";

const ChallengeStyled = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
  > li {
    aspect-ratio: 1;
    background-color: #fff;
    a {
      display: block;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: ${(props) => props.theme.colors.main};
        color: #fff;
      }
    }
  }
`;

export default ChallengeStyled;
