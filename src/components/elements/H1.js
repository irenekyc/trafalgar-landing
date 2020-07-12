import React from "react";
import styled from "styled-components";
import { themeData } from "../../theme";

const H1 = ({ children }) => {
  const H1 = styled.h1`
    font-size: 48px;
    line-height: 56px;
    font-weight: 700;
    color: ${themeData.colors.dark};
  `;

  return <H1> {children}</H1>;
};

export default H1;
