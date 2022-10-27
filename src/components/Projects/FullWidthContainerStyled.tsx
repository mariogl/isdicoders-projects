import styled from "styled-components";

const FullWidthContainerStyled = styled.div`
  margin-left: -${(props) => props.theme.containersPadding};
  margin-right: -${(props) => props.theme.containersPadding};
`;

export default FullWidthContainerStyled;
