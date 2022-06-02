import styled from "styled-components";
import React from "react";

const StyledTextarea = styled.div`
  white-space: pre-wrap;
  word-break: break-word;
  overflow: hidden;
  max-height: 100%;
  background: black;
  font-size: 24px;
  margin-left: 10px;
  resize: none;
  cursor: default;
  color: ${(props) => props.color || props.theme.color};
  &:focus {
    outline: none;
  }
`;

const Line = React.forwardRef(
  ({ content, keyEnterHandler, keyDownHandler, ...props }, ref) => {
    return (
      <StyledTextarea
        ref={ref}
        {...props}
        onKeyPress={keyEnterHandler}
        onKeyDown={keyDownHandler}
        suppressContentEditableWarning={true}
      >
        {content}
      </StyledTextarea>
    );
  }
);

Line.displayName = "Line";

export default Line;
