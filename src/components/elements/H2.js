import styled from "styled-components";

const H2 = styled.h2`
  font-size: 36px;
  font-weight: 700;
  line-height: 56px;
  color: ${(props) => props.color || "black"};
`;

export default H2;
