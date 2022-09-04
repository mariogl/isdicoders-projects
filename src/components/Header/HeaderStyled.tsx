import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: ${(props) => props.theme.colors.main};
  color: #fff;

  .header__inner {
    height: 60px;
    padding: 0 ${(props) => props.theme.containersPadding};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default HeaderStyled;
