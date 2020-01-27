import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MydModalWithGrid(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
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

function PropertyCard(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
      <Card>
        <Card.Img
          variant="top"
          src={props.image}
          onClick={() => setModalShow(true)}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.details}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default PropertyCard;
