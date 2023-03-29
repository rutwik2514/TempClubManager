import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/CodeSprint.webp";
import courseImg2 from "../../assests/images/Devheat.webp";
import courseImg3 from "../../assests/images/API.jpeg";
import "./Events.css";
import CourseCard from "./Event_Card";

const coursesData = [
  {
    id: "01",
    title: "CodeSprint",

    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: " Devheat Beta",

    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "API SPRINT",

    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Events</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn" style={{backgroundColor: 'orange'}}>See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
