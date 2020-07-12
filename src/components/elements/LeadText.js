import styled from "styled-components";
import React from "react";

const LeadText = ({ children }) => {
  const LeadText = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: black;
    line-height: 56px;
  `;

  return <LeadText> {children}</LeadText>;
};

export default LeadText;
