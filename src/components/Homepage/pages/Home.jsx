import React, { Fragment } from "react";
import Header from "../Header/Header";
import HeroSection from "../Main/Main";
import AboutUs from "../About-us/AboutUs";
import Events from "../Events/Events"
import Features from "../Feature-section/Features";
import Testimonials from "../Voice/Voice";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <AboutUs />
      <Events />
      <Features />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Home;
