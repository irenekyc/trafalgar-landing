import styled from "styled-components";

import { themeData } from "../../theme";

const P = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: ${(props) => props.color || themeData.colors.light};
  line-height: 28px;
`;

export default P;
