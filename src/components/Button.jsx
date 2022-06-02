import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 5%;
  padding: 10px 15px;
  margin: 40px 0px;
  font-size: 18px;
  cursor: pointer;
  &:active {
    transform: scale(0.9, 0.9);
  }
  &:focus {
    outline: none;
  }
  align-self: ${(props) => props.alignSelf || "stretch"};
  ${(props) =>
    props.primary &&
    css`
      color: ${(props) => props.color || "black"};
      background: ${(props) => props.color || props.theme.color};
    `}

  ${(props) =>
    props.outlined &&
    css`
      color: ${(props) => props.color || props.theme.color};
      border: 2px solid ${(props) => props.color || props.theme.color};
      background: transparent;
    `}
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
