import styled from "styled-components";

const NavigationStyled = styled.nav`
  flex: 2;
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  a {
    color: #fff;
  }
  .active {
    font-weight: bold;
  }
`;

export default NavigationStyled;
