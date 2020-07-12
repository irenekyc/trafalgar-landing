import React from "react";
import styled from "styled-components";

import Wrapper from "../../layout/Wrapper";
import Flex from "../../layout/Flex";

import A from "../elements/A";

const NavBar = () => {
  const Nav = styled.nav`
    width: 100vw;
    padding: 40px 0;
  `;

  return (
    <Nav>
      <Wrapper>
        <Flex id="nav-main-container" justify="space-between" align="center">
          <img src="images/logo.svg" alt="Trafalgar logo" />
          <Flex width="50%" justify="space-between" align="center">
            <A>Home</A>
            <A>Find a doctor </A>
            <A>Apps</A>
            <A>Testimonials</A>
            <A>About</A>
          </Flex>
        </Flex>
      </Wrapper>
    </Nav>
  );
};

export default NavBar;
