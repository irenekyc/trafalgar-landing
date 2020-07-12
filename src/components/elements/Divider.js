import styled from "styled-components";

const Divider = styled.div`
  content: "";
  width: ${(props) => props.width || "50px"};
  height: ${(props) => props.height || "2px"};
  background: ${(props) => props.color || "#000"};
  margin: 25px 0;
  ${(props) => props.center && "margin: 25px auto;"}
`;

export default Divider;
