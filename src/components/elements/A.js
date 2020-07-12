import styled from "styled-components";
import React from "react";
import { themeData } from "../../theme";

const A = ({ children }) => {
  const Link = styled.a`
    text-decoration: none;
    color: ${themeData.colors.link};
    opacity: 0.5;
    font-size: 18px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  `;

  return <Link> {children} </Link>;
};

export default A;
