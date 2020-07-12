import React from "react";
import styled from "styled-components";

import Section from "../../layout/Section";
import Wrapper from "../../layout/Wrapper";
import Flex from "../../layout/Flex";
import MainElement from "../elements";
import BgDot from "../elements/BgDot";
import BgDotWhite from "../elements/BgDotWhite";

import { themeData } from "../../theme";
const Testimonials = () => {
  const TestimonialContainer = styled(Wrapper)`
    width: 80%;
    background: linear-gradient(191.49deg, #67c3f3 9.05%, #5a98f2 76.74%);
    min-height: 425px;
    padding: 64px 118px;
    border-radius: 24px;
    color: white;
    flex-direction: column;
    position: relative;
  `;

  const TestimonialsBG1 = styled(BgDotWhite)`
    right: -47px;
    top: -15px;
    z-index: 1;
  `;
  const TestimonialsBG2 = styled(BgDot)`
    left: -52px;
    bottom: 39px;
    z-index: -1;
  `;

  const CustomerName = styled(MainElement.H5)`
    font-size: 22px;
    color: white;
  `;
  const TestimonialContent = styled.div`
    width: 60%;
    padding-left: 50px;
    font-size: 19px;
    line-height: 30px;
    font-weight: 300;
  `;

  const Icon = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${themeData.colors.primary};
    opacity: ${(props) => (props.active ? "1" : "0.4")};
  `;

  const Slider = styled.img`
    cursor: pointer;
    opacity: 0.4;
    &:hover {
      opacity: 1;
    }
  `;
  return (
    <Section>
      <TestimonialContainer>
        <TestimonialsBG1 />
        <TestimonialsBG2 />
        <MainElement.H2 color="white">
          What our customer are saying
        </MainElement.H2>
        <MainElement.Divider color="white" center={true}></MainElement.Divider>
        <MainElement.Margin height="50px" />

        <Flex justify="space-between">
          <img src="images/edward.png" alt="customer edward" />
          <MainElement.Margin width="30px" />

          <Flex direction="column" width="200px" align="start">
            <CustomerName>Edward Newgate</CustomerName>
            <MainElement.P color="white"> Founder Circle</MainElement.P>
          </Flex>

          <TestimonialContent>
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely”
          </TestimonialContent>
        </Flex>
      </TestimonialContainer>
      <MainElement.Margin height="60px" />
      <Flex width="336px" justify="space-between" center={true}>
        <Slider src="images/icon-prev.svg" alt="prev" />
        <Flex width="100px" justify="space-between">
          <Icon active={true} />
          <Icon />
          <Icon />
          <Icon />
        </Flex>
        <Slider src="images/icon-next.svg" alt="next" />
      </Flex>
    </Section>
  );
};

export default Testimonials;
