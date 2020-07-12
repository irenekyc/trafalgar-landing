import styled from "styled-components";

const DotBG = styled.div`
  position: absolute;
  width: 131px;
  height: 115px;
  background: url("images/bg-dot-element.svg");
  top: ${(props) => props.top || "auto"};
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  content: "";
`;

export default DotBG;
