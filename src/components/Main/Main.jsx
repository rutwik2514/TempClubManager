import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import logo from "../../assests/images/LOGO1.json"
import "./Main.css"
import Lottie from "lottie-react";
const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Get updates <br /> of your College clubs
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                quas officiis et repellat!
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn" style={{backgroundColor : 'orange'}}>Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            {/* <img src={heroImg} alt="" className="w-100 hero__img" /> */}
            <Lottie animationData={logo}></Lottie>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
