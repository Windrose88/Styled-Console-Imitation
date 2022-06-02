import styled from "styled-components";

const StyledTitle = styled.h1`
  color: ${(props) => props.color || props.theme.color};
  user-select: none;
`;

const Title = (props) => {
  return <StyledTitle {...props} />;
};

export default Title;
