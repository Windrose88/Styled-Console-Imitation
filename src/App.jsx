import styled from "styled-components";
import { useState } from "react";
import Button from "./components/Button";
import Console from "./components/Console";
import Flex from "./components/Flex";
import Title from "./components/Title";
import { DEFAULT_PATH } from "./utils";
import { GlobalStyles, greenTheme, whiteTheme } from "./main";
import { ThemeProvider } from "styled-components";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`;

const App = () => {
  const [lines, setLines] = useState([DEFAULT_PATH]);
  const [theme, setTheme] = useState("green");
  const [session, setSession] = useState(1);

  const switchTheme = () => {
    theme === "green" ? setTheme("white") : setTheme("green");
    setLines([...lines]);
  };

  const getEnteredText = (text) => {
    const tempLines = [...lines];
    tempLines[tempLines.length - 1] = text;
    setLines([...tempLines, DEFAULT_PATH]);
  };

  const clearButtonHandler = () => {
    setLines([DEFAULT_PATH]);
    setSession(session + 1);
  };

  return (
    <ThemeProvider theme={theme === "green" ? greenTheme : whiteTheme}>
      <GlobalStyles />
      <AppWrapper>
        <Flex justify="center">
          <Title>Console Imitation</Title>
        </Flex>
        <Flex direction="column" margin="20px 0">
          <Console
            getEnteredText={getEnteredText}
            lines={lines}
            session={session}
          />
          <Flex direction="row" justify="space-between">
            <Button
              primary
              onClick={switchTheme}
              theme={
                theme === "green"
                  ? { color: "lightgrey" }
                  : { color: "forestgreen" }
              }
            >
              Change Theme
            </Button>
            <Button outlined onClick={clearButtonHandler}>
              Clear Console
            </Button>
          </Flex>
        </Flex>
      </AppWrapper>
    </ThemeProvider>
  );
};

ThemeProvider.displayName = "ThemeProvider";
AppWrapper.displayName = "AppWrapper";

export default App;
