import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import job from './images/jobserv.jpg'
import resume from './images/resume-writing-service.jpg'

function Services() {
  return (
    <div className="box">
      <Container className="py-2">
       
        <section className="service-section text-center mb-5">
          <h1 className='mb-5'>Our Services</h1>
          <Row xs={1} md={2} lg={4} className="g-4">
            
            <Col>
              <Card className="bg-dark text-white h-100">
                <Card.Img
                  variant="top"
                  src={job}
                  alt="Job Search"
                />
                <Card.Body>
                  <Card.Title>Job Search</Card.Title>
                  <Card.Text>
                    Find and apply to your dream job from our vast listings.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="bg-dark text-white h-100">
                <Card.Img
                  variant="top"
                  src={resume}
                  alt="Resume Building"
                />
                <Card.Body>
                  <Card.Title>Resume Building</Card.Title>
                  <Card.Text>
                    Get tips and tools to create a winning resume.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="bg-dark text-white h-100">
                <Card.Img
                  variant="top"
                  src={job}
                  alt="Career Advice"
                />
                <Card.Body>
                  <Card.Title>Career Advice</Card.Title>
                  <Card.Text>
                    Expert advice and guidance for your career growth.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="bg-dark text-white h-100">
                <Card.Img
                  variant="top"
                  src={resume}
                  alt="Skill Enhancement"
                />
                <Card.Body>
                  <Card.Title>Skill Enhancement</Card.Title>
                  <Card.Text>
                    Improve your skills with our specialized courses.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

      </Container>
    </div>
  );
}

export default Services;
