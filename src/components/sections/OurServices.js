import React from "react";

import Wrapper from "../../layout/Wrapper";
import Flex from "../../layout/Flex";
import MainElement from "../elements";

import styled from "styled-components";
import { service } from "../../data";

const OurService = () => {
  const ServiceSection = styled.section`
    min-height: 1153px;
    width: 100vw;
    padding: 60px 0;
    position: relative;

    &::after {
      position: absolute;
      width: 1100px;
      height: 1100px;
      top: 50%;
      transform: translateY(-50%);
      left: -100px;
      background: url("images/bg-service.svg") no-repeat;
      background-position: left center;
      content: "";
      z-index: -1;
    }

    &:before {
      position: absolute;
      width: 131px;
      height: 115px;
      background: url("images/bg-dot-element.svg");
      content: "";
      top: 50%;
      right: 10%;
      z-index: -1;
    }
  `;

  const Heading = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
  `;

  const ServiceCard = styled.div`
    width: 350px;
    height: 354px;
    border-radius: 20px;
    background: white;
    box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
    padding: 58px 52px 48px 36px;
    margin-bottom: 37px;

    img {
      width: 90px;
      height: 90px;
    }
  `;

  return (
    <ServiceSection>
      <Wrapper>
        <Flex direction="column">
          <Heading>
            <MainElement.H2>Our services</MainElement.H2>
            <MainElement.Divider center={true} />
            <MainElement.H5>
              We provide to you the best choiches for you. Adjust it to your
              health needs and make sure your undergo treatment with our highly
              qualified doctors you can consult with us which type of service is
              suitable for your health
            </MainElement.H5>
          </Heading>
          <MainElement.Margin height="80px" />
          <Flex justify="space-between" wrap={true}>
            {service.features.map((card) => (
              <ServiceCard id={card.id}>
                <img src={`images/${card.img}`} alt={card.title} />
                <MainElement.Margin height="19px" />
                <MainElement.LeadText>{card.title}</MainElement.LeadText>
                <MainElement.P>{card.intro}</MainElement.P>
              </ServiceCard>
            ))}
          </Flex>
          <MainElement.Margin height="69px" />
          <MainElement.ButtonBorder>Learn more</MainElement.ButtonBorder>
        </Flex>
      </Wrapper>
    </ServiceSection>
  );
};

export default OurService;
