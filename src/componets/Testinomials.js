
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <Container>
        <h2 className="section-title">What Our Users Say</h2>
        <Row className="testimonial-cards">
          <TestimonialCard
            author="John Doe"
            position="Software Developer"
            content="I found my dream job through this portal. The application process was smooth, and the search filters helped me narrow down the options."
          />
          <TestimonialCard
            author="Jane Smith"
            position="HR Manager"
            content="Our company has been using this platform for recruitment, and we've successfully hired top-notch talent. The candidate profiles are detailed, making it easy for us to find the right fit."
          />
          <TestimonialCard
            author="Alex Johnson"
            position="Job Seeker"
            content="The company reviews feature was incredibly helpful. It provided valuable insights into the workplace culture, helping me make an informed decision before applying."
          />
        </Row>
      </Container>
    </section>
  );
};

const TestimonialCard = ({ author, position, content }) => {
  return (
    <Col sm={12} md={6} lg={4} className="testimonial-card mb-4">
      <Card>
        <Card.Body>
          <Card.Text className="testimonial-content text-gray-700">{content}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="testimonial-author">
            <div className="testimonial-avatar">
              <img
                className="avatar-image"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt={author}
              />
            </div>
            <div className="author-details">
              <div className="author-name">{author}</div>
              <div className="author-position">{position}</div>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Testimonials;
