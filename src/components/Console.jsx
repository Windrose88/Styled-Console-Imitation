import { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import { DEFAULT_PATH, setCaretAtEnd, getCaret } from "../utils";
import Flex from "./Flex";
import Line from "./Line";

const StyledContainer = styled.div`
  height: 400px;
  border: 2px solid ${(props) => props.color || props.theme.color};
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
    background-color: black;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.color || props.theme.color};
    border-radius: 10px;
  }
`;

const onKeyDownHandler = (event) => {
  if (
    getCaret(event.target) < DEFAULT_PATH.length ||
    ((event.key === "Backspace" || event.key === "ArrowLeft") &&
      getCaret(event.target) === DEFAULT_PATH.length)
  ) {
    event.preventDefault();
  }
};

const selectionPreventHandler = (event) => {
  event.preventDefault();
};

const Console = ({ color, getEnteredText, lines, session, ...props }) => {
  const [enteredText, setEnteredText] = useState();

  const textareaRef = useRef(null);

  const textChangeHandler = useCallback(
    (event) => {
      setEnteredText(event.target.textContent);
    },
    [setEnteredText]
  );

  const onKeyEnterPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        getEnteredText(enteredText);
        event.preventDefault(); //от лишнего перевода строки при нажатии Enter
      }
    },
    [getEnteredText, enteredText]
  );

  const onClickOnFocusHandler = (event) => {
    textareaRef.current.focus();
    setCaretAtEnd(textareaRef.current);
  };

  useEffect(() => {
    const textareaRefCurrent = textareaRef.current;

    if (textareaRefCurrent) {
      textareaRefCurrent.focus();
      setCaretAtEnd(textareaRefCurrent);

      textareaRefCurrent.addEventListener(
        "selectstart",
        selectionPreventHandler
      );
    }
    return () => {
      if (textareaRefCurrent) {
        textareaRefCurrent.removeEventListener(
          "selectstart",
          selectionPreventHandler
        );
      }
    };
  }, [lines]);

  return (
    <StyledContainer onClick={onClickOnFocusHandler}>
      <Flex direction="column">
        {lines.map((line, index) => (
          <Line
            ref={index === lines.length - 1 ? textareaRef : null}
            key={`${session}:${index}`}
            content={line}
            keyEnterHandler={onKeyEnterPress}
            keyDownHandler={onKeyDownHandler}
            onInput={textChangeHandler}
            onFocus={onClickOnFocusHandler}
            contentEditable={Boolean(index === lines.length - 1)}
          ></Line>
        ))}
      </Flex>
    </StyledContainer>
  );
};

StyledContainer.displayName = "StyledContainer";

export default Console;
