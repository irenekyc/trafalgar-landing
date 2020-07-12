import styled from "styled-components";
import React from "react";
import { themeData } from "../../theme";

const ButtonFilled = ({ children }) => {
  const Button = styled.button`
    display: inline-block;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 200px;
    text-align: center;
    line-height: 60px;
    color: white;
    background: ${themeData.colors.primary};
    outline: none;
    border: none;
    border-radius: 55px;
    font-family: inherit;
    font-size: inherit;
  `;

  return <Button>{children}</Button>;
};

export default ButtonFilled;
