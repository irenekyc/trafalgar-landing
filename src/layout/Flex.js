import styled from "styled-components";

const Flex = styled.div`
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  width: ${(props) => props.width || "100%"};
  height: 100%;
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  flex-direction: ${(props) => props.direction};
  ${(props) => (props.center ? "margin: 0 auto" : "margin: 0")};
`;

export default Flex;
