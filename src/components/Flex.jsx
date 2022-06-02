import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "flex-start"};
  margin: ${(props) => props.margin || "0"};
`;

const Flex = (props) => {
  return <StyledFlex {...props} />;
};

export default Flex;
