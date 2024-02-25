import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Selection from "./Selection";
import "../Styling/homepage.css";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testinomials";
import ContactUs from "./Contact";
import Footer from "./Footer";

export default function HomeScreen() {
  const token = window.localStorage.getItem("token");
  const type = window.localStorage.getItem("type");
  const history = useNavigate();
  useEffect(() => {
    if (token != null && type === "admin") {
      history("/admindashboard");
    }
    if (token != null && type === "company") {
      history("/companydashboard");
    }
    if (token != null && type === "job_seeker") {
      history("/jobberdashboard");
    }
  }, []);

  return (
    <>
      <Selection />
      <About />
      <Services />
      <Testimonials />
      <ContactUs />
      <Footer/>
    </>
  );
}
