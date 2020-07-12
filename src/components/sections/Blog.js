import React from "react";
import styled from "styled-components";
import { blogData } from "../../data";
import { themeData } from "../../theme";

import Section from "../../layout/Section";
import Wrapper from "../../layout/Wrapper";
import Flex from "../../layout/Flex";
import MainElement from "../elements";
import BgDot from "../elements/BgDot";

const Blog = () => {
  const BlogContainer = styled(Flex)`
    position: relative;
  `;

  const BlogBgDot = styled(BgDot)`
    top: -42px;
    left: -49px;
  `;

  const BlogCard = styled.div`
    width: 350px;
    height: 512px;
    border-radius: 20px;
    background: white;
    overflow: hidden;
    box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
  `;

  const BlogDetails = styled(Flex)`
    padding: 24px 33px;
  `;

  const BlogTitle = styled(MainElement.H3)`
    font-weight: 700;
    color: black;
    line-height: 32px;
    margin-bottom: 12px;
  `;

  const BlogLink = styled.a`
    color: ${themeData.colors.primary};
    font-weight: 600;
    font-size: 17px;
    line-height: 28px;
    margin-top: 25px;
    letter-spacing: 0.2px;
  `;
  const BlogSection = styled(Section)`
    position: relative;
    margin: 60px 0;
  `;

  const BlogBG = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    content: "";
    background: url("images/bg-blog.png") no-repeat;
    background-position: right;
    height: 700px;
    width: 700px;
  `;

  const BlogBottomBG = styled(BgDot)`
    bottom: -90px;
    right: 92px;
  `;
  return (
    <BlogSection>
      <BlogBG />
      <BlogBottomBG />
      <Wrapper>
        <Flex direction="column">
          <MainElement.H2>Check out our latest article</MainElement.H2>
          <MainElement.Divider />
          <MainElement.Margin height="50px" />
          <BlogContainer justify="space-between" align="start">
            {blogData.map((e) => (
              <BlogCard id={e.id}>
                <img src={`images/${e.img}`} alt={e.title} />
                <BlogDetails direction="column" align="start" justify="start">
                  <BlogTitle>{e.title}</BlogTitle>
                  <MainElement.P>{e.content}</MainElement.P>
                  <BlogLink>
                    Read more <img src="images/icon-more.svg" alt=""></img>
                  </BlogLink>
                </BlogDetails>
              </BlogCard>
            ))}
            <BlogBgDot />
          </BlogContainer>
          <MainElement.Margin height="69px" />
          <MainElement.ButtonBorder> View all</MainElement.ButtonBorder>
        </Flex>
      </Wrapper>
    </BlogSection>
  );
};

export default Blog;
