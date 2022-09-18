import styled from "styled-components";

const ContainerStyled = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  a {
    color: ${(props) => props.theme.colors.main};
  }
`;

export default ContainerStyled;
