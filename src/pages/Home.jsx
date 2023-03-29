import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Main/Main";
import AboutUs from "../components/About-us/AboutUs";
// import Courses from "../components/Events/Courses";
import Events from "../components/Events/Events"
import Features from "../components/Feature-section/Features";
import Testimonials from "../components/Voice/Voice";
import Footer from "../components/Footer/Footer";

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
