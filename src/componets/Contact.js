import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import myImage from './images/contact.jpg'


function ContactUs() {
  return (
    <div className='container1'>
    <Container className="py-5">
    <Row className="justify-content-center align-items-center">
  
      <Col md={6} className="mb-4">
        <img
          src={myImage} 
          alt="Contact Us"
          className="img-fluid"
        />
      </Col>

    
      <Col md={6}>
        <div className="contact-details">
          <h2 className="text-center mb-4">Contact Us</h2>
          <p><strong>Email:</strong> contact@jobportal.com</p>
          <p><strong>Phone:</strong> +1234567890</p>
          <p><strong>Address:</strong> 123 Job Portal St, City, Country</p>
        </div>
      </Col>
    </Row>
  </Container>
  </div>
  
  );
}

export default ContactUs;
