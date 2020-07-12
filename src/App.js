import React, { Fragment } from "react";
import { GlobalStyle } from "./theme";

import NavBar from "./components/sections/NavBar";
import Hero from "./components/sections/Hero";
import OurService from "./components/sections/OurServices";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import Blog from "./components/sections/Blog";
import Footer from "./components/sections/Footer";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
      <Hero />
      <OurService />
      <About />
      <Testimonials />
      <Blog />
      <Footer />
    </Fragment>
  );
};

export default App;
