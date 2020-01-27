import React from 'react';
import PropertyCard from '../Widgets/PropertyCard';
import '../Styles/Question.css';
import { Link } from 'react-router-dom';
import { properties } from '../properties';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MydModalWithGrid(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Using Grid in Modal
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <code>.col-xs-12 .col-md-8</code>
                        </Col>
                        <Col xs={6} md={4}>
                            <code>.col-xs-6 .col-md-4</code>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={6} md={4}>
                            <code>.col-xs-6 .col-md-4</code>
                        </Col>
                        <Col xs={6} md={4}>
                            <code>.col-xs-6 .col-md-4</code>
                        </Col>
                        <Col xs={6} md={4}>
                            <code>.col-xs-6 .col-md-4</code>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function ShowProperties() {
  console.log(properties);

  return (
    <div>
      <section className="section">
        <h1 className="question-main">Select properties you like!</h1>
      </section>
      <Container>
        <Row>
          {properties.map(property => {
            return (
              <Col xs={6} md={4} lg={3}>
                <Link to="/questions/payment">
                  <PropertyCard
                    image={property.images[0]}
                    title={property.title}
                    description={property.city}
                  />
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default ShowProperties;
