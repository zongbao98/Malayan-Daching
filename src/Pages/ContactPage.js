import React from 'react';
import { Container, Nav, Row, Col, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const ContactPage = () => {

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="sidebar">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link as={Link} to="/hq">HQ</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/subsidiaries">Subsidiaries</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/careers">Careers</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        {/* Main Content */}
        <Col md={9}>
          <Tab.Content>
            <Tab.Pane eventKey="/hq">
              <h2>Headquarters</h2>
              <p>Content about the HQ.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="/subsidiaries">
              <h2>Subsidiaries</h2>
              <p>Content about the subsidiaries.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="/careers">
              <h2>Careers</h2>
              <p>Content about careers.</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;