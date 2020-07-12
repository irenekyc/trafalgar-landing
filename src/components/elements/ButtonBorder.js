import React from "react";
import styled from "styled-components";
import { themeData } from "../../theme";

const ButtonBorder = ({ children }) => {
  const Button = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 200px;
    text-align: center;
    line-height: 60px;
    color: ${themeData.colors.primary};
    border: 1px solid ${themeData.colors.primary};
    outline: none;
    border-radius: 55px;
    font-family: inherit;
    font-size: inherit;
    background: transparent;
  `;

  return <Button> {children} </Button>;
};

export default ButtonBorder;
