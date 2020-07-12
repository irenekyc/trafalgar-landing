import React from "react";
import styled from "styled-components";
import Section from "../../layout/Section";
import Flex from "../../layout/Flex";
import Wrapper from "../../layout/Wrapper";

import MainElement from "../elements";
import BgDot from "../elements/BgDot";

const About = () => {
  const AboutSection = styled(Section)`
    position: relative;
  `;

  const AboutBG = styled(BgDot)`
    top: 50%;
    right: 0;
  `;

  const AboutFlex = styled(Flex)`
    img {
      width: 60%;
    }
  `;

  const AboutText = styled.div`
    width: 450px;
    padding: 40px;
  `;

  return (
    <AboutSection>
      <AboutBG />
      <Wrapper>
        <Flex direction="column">
          <AboutFlex justify="space-between">
            <img
              src="images/vector-about.svg"
              alt="leading pharmacy provider"
            />
            <AboutText>
              <MainElement.H2>Leading healthcare providers</MainElement.H2>
              <MainElement.Divider width="56px" />
              <MainElement.H5>
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone. To us, it’s not
                just work. We take pride in the solutions we deliver
              </MainElement.H5>
              <MainElement.Margin height="40px" />
              <MainElement.ButtonBorder>Learn more</MainElement.ButtonBorder>
            </AboutText>
          </AboutFlex>

          <MainElement.Margin height="100px" />

          <AboutFlex justify="space-between" direction="row-reverse">
            <img
              src="images/vector-downloadapps.svg"
              alt="download trafalgar apps"
            />
            <AboutText>
              <MainElement.H2>Download our mobile apps</MainElement.H2>
              <MainElement.Divider width="56px" />
              <MainElement.H5>
                Our dedicated patient engagement app and web portal allow you to
                access information instantaneously (no tedeous form, long calls,
                or administrative hassle) and securely
              </MainElement.H5>
              <MainElement.Margin height="40px" />
              <MainElement.ButtonBorder>
                Download
                <MainElement.ButtonIcon src="images/icon-download.svg" />
              </MainElement.ButtonBorder>
            </AboutText>
          </AboutFlex>
        </Flex>
      </Wrapper>
    </AboutSection>
  );
};

export default About;
