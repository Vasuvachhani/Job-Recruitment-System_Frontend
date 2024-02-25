/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import myimage from "./images/Home_Icon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row, Col } from "react-bootstrap";

export default function Selection() {
  // function adminClick() {
  //   window.location.href = "./Login/admin";
  // }
  // function CompanyClick() {
  //   window.location.href = "./Login/company";
  // }
  // function JobSeekerClick() {
  //   window.location.href = "./Login/job_seeker";
  // }
  return (
    <>
      <div className="bg">
        <Container className="my-5">
          <Row>
            <Col md={6} className="text-black">
              <h1 className="display-8">Welcome to Our Job Portal</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Nulla porttitor accumsan
                tincidunt.
              </p>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Proin accumsan purus vel cursus.
              </p>
              <Button
                variant="primary"
                className="btn-lg mx-2"
              >
                 <a href="./Login/admin">Admin</a>
              </Button>
              <Button
                variant="primary"
                className="btn-lg mx-2"
              >
                 <a href="./Login/company">Company</a>
              </Button>
              <Button variant="primary" className="btn-lg mx-2">
                <a href="./Login/job_seeker">Job Seekers</a>
              </Button>
            </Col>

            <Col md={6}>
              <div className="d-flex justify-content-end">
                <img
                  src={myimage}
                  alt="Job Portal Image"
                  className="img-fluid rounded shadow"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      
      {/* {" "} */}
      {/* <div className="centered-div" style={{ margin: "50px" }}>
        <img src={myimage} alt="Your mage" className="im1" />
        <h1 className="heading">Welcome Back!</h1>
        <div className="button-container">
          <button className="centered-button" onClick={adminClick}>
            Admin
          </button>
          <button className="centered-button" onClick={CompanyClick}>
            Company
          </button>

          <button className="centered-button1" onClick={JobSeekerClick}>
            Job Seeker
          </button>
        </div>
      </div>{" "} */}
    </>
  );
}
