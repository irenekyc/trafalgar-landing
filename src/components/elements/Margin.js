import styled from "styled-components";

const Margin = styled.div`
  height: ${(props) => props.height || "0"};
  width: ${(props) => props.width || "0"};
  content: "";
`;

export default Margin;
