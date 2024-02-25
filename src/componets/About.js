/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import myImage from "./images/about.jpg";



function About() {
  return (
    <div className="bg-img">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <div>
              <img
                src={myImage}
                className="img-fluid rounded shadow"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </Col>

          <Col md={6} className="animation">
            <h1 className="display-4">About Our Job Portal</h1>
            <p className="lead">
              Welcome to our job portal! We strive to connect job seekers with
              opportunities that match their skills and ambitions.
            </p>
            <p>
              Our platform provides a wide range of job listings from various
              industries. Whether you're a recent graduate or an experienced
              professional, find your next career move with us.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
