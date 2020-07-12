import React from "react";
import styled from "styled-components";

import Wrapper from "../../layout/Wrapper";
import Flex from "../../layout/Flex";

import BgDotWhite from "../elements/BgDotWhite";

const Footer = () => {
  const Footer = styled.footer`
    background: linear-gradient(180.92deg, #67c3f3 -8.57%, #5a98f2 82.96%);
    padding: 100px 0;
    color: white !important;
    position: relative;
    overflow: hidden;
  `;

  const FooterBG2 = styled(BgDotWhite)`
    left: -19px;
    bottom: -19px;
  `;

  const FooterText = styled.p`
    color: white;
    font-weight: 300;
    font-size: 18px;
    margin-top: 25px;
    margin-bottom: 37px;
    &:last-child {
      margin-top: 0;
      margin-bottom: -15px;
    }
  `;

  const FooterLead = styled.p`
    font-size: 20px;
    line-height: 60px;
    font-weight: 700;
  `;

  const FooterLink = styled.a`
    font-size: 18px;
    line-height: 38px;
    font-weight: 300;
  `;
  return (
    <Footer>
      <FooterBG2 />
      <Wrapper>
        <Flex justify="space-between" align="start" width="100%">
          <Flex direction="column" justify="start" align="start" width="450px">
            <img src="images/logo-white.svg" alt="trafalgar logo" />
            <FooterText>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </FooterText>
            <FooterText>
              ©Trafalgar PTY LTD 2020. All rights reserved
            </FooterText>
          </Flex>

          <Flex direction="column" align="start" width="auto">
            <FooterLead>Company</FooterLead>
            <FooterLink>About</FooterLink>
            <FooterLink>Testimonials</FooterLink>
            <FooterLink>Find a doctor</FooterLink>
            <FooterLink>Apps</FooterLink>
          </Flex>

          <Flex direction="column" align="start" width="auto">
            <FooterLead>Region</FooterLead>
            <FooterLink>Indonesia</FooterLink>
            <FooterLink>Singapore</FooterLink>
            <FooterLink>Hong Kong</FooterLink>
            <FooterLink>Canada</FooterLink>
          </Flex>
          <Flex direction="column" align="start" width="auto">
            <FooterLead>Help</FooterLead>
            <FooterLink>Help center</FooterLink>
            <FooterLink>Contact support</FooterLink>
            <FooterLink>Instructions</FooterLink>
            <FooterLink>How it works</FooterLink>
          </Flex>
        </Flex>
      </Wrapper>
    </Footer>
  );
};

export default Footer;
