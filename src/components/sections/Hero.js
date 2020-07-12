import React from "react";
import styled from "styled-components";

import Section from "../../layout/Section";
import Wrapper from "../../layout/Wrapper";
import Flex from "../../layout/Flex";

import MainElement from "../elements";
import DotBG from "../elements/DotBG";

const Hero = () => {
  const HeroSection = styled(Section)`
    min-height: 700px;
    position: relative;
  `;

  const HEROTEXT = styled.div`
    width: 445px;
  `;

  return (
    <HeroSection>
      <DotBG top="160px" left="-50px" />
      <Wrapper>
        <Flex justify="space-between" align="center">
          <HEROTEXT>
            <MainElement.H1>Virtual healthcare for you</MainElement.H1>
            <MainElement.Margin height="25px" />
            <MainElement.H3>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </MainElement.H3>
            <MainElement.Margin height="45px" />
            <MainElement.ButtonFilled>Consult today</MainElement.ButtonFilled>
          </HEROTEXT>
          <img
            src="images/vector-hero.svg"
            alt="Trafalgar - leading medical professional"
          />
        </Flex>
      </Wrapper>
    </HeroSection>
  );
};

export default Hero;
