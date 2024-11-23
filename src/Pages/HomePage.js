import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel, Row, Col, Card } from 'react-bootstrap';

// Slider Images
import image1 from '../Assets/Images/slider1.jpg';
import image2 from '../Assets/Images/slider2.jpg';
import image3 from '../Assets/Images/slider3.jpg';
import image4 from '../Assets/Images/slider4.jpg';

// Core Images
import coreImage1 from '../Assets/Images/corebox_1.jpg';
import coreImage2 from '../Assets/Images/corebox_2.jpg';
import coreImage3 from '../Assets/Images/corebox_3.jpg';
import coreImage4 from '../Assets/Images/corebox_4.jpg';
import coreImage5 from '../Assets/Images/corebox_5.jpg';
import coreImage6 from '../Assets/Images/corebox_6.jpg';
import coreImage7 from '../Assets/Images/corebox_7.jpg';
import coreImage8 from '../Assets/Images/corebox_8.jpg';

const HomePage = () => {
    const capabilities = [
        {
          title: 'Building & Civil Engineering',
          description: 'Description for Capability 1',
          image: coreImage1,
        },
        {
          title: 'Process Auotomation & Control',
          description: 'Description for Capability 2',
          image: coreImage2,
        },
        {
          title: 'Weighing Equipment',
          description: 'Description for Capability 3',
          image: coreImage3,
        },
        {
          title: 'Process Equipment & System',
          description: 'Description for Capability 4',
          image: coreImage4,
        },
        {
          title: 'Testing & Calibration',
          description: 'Description for Capability 4',
          image: coreImage5,
        },
        {
          title: 'Weighing Solutions',
          description: 'Description for Capability 4',
          image: coreImage6,
        },
        {
          title: 'Surface Treatment & Coating',
          description: 'Description for Capability 4',
          image: coreImage7,
        },
        {
          title: 'Project Consulting',
          description: 'Description for Capability 4',
          image: coreImage8,
        },
      ];

      return (
        <div>
          {/* Slideshow */}
          <div className="mt-4">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>WE CALIBRATE PROCESSES</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>WE MEASURE ACHIEVEMENTS</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image2}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>WE ENGINEER SOLUTIONS</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image2}
                  alt="Fourth slide"
                />
                <Carousel.Caption>
                  <h3>WE BUILD AND CONSTRUCT RELATIONSHIPS</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
    
          {/* YouTube Video Embed Section */}
          <div className="video-container mt-5">
            <Container>
              <Row>
                {/* First Part: Video iframe */}
                <Col md={6}>
                  <div className="d-flex justify-content-center">
                    <iframe
                      width="100%" // Makes the iframe responsive to container size
                      height="450"
                      src="https://www.youtube.com/embed/MACirbhe6Zs"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="YouTube video"
                    ></iframe>
                  </div>
                </Col>
    
                {/* Second Part: Description */}
                <Col md={6}>
                  <div className="video-description">
                    <h2 className="video-title">Since 1955.</h2>
                    <p style={{ color: 'black' }}>
                      Founded in 1955, Malayan Daching Company (MDC) started off as a manufacturer of daching, a traditional Chinese weighing scale used widely in the early days for all sorts of trading.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
    
          {/* Core Capabilities Section */}
          <div className="capabilities-container mt-5">
            <h2 className="text-center">Our Core Capabilities</h2>
            <Row>
              {capabilities.map((capability, index) => (
                <Col sm={12} md={6} lg={3} key={index} className="mb-4">
                  <Card className="capability-card">
                    <Card.Img variant="top" src={capability.image} />
                    <Card.Body>
                      <Card.Title>{capability.title}</Card.Title>
                      <Card.Text>{capability.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      );
};

export default HomePage;