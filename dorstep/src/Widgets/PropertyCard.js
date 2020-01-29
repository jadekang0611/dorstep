import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/PropertyCard.css';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles/PropertyModal.css';

function PropertyModalScreen(props) {
  console.log('modal: ' + props.image);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <Container>
                <Row className="carousel-row">
                  <Carousel>
                    {props.images.map(image => {
                      return (
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={image}
                            alt="First slide"
                          />
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                </Row>
              </Container>
              <br></br>
              <Container>
                <Row className="content-container-modal">
                  <Container>
                    <Row>
                      <img src="https://via.placeholder.com/350"></img>
                    </Row>
                  </Container>
                </Row>
              </Container>
              <br></br>
              <Container>
                <Row className="content-container-modal">
                  <h4 className="section-title-modal">Nearby Places</h4>
                  <Container className="section-content-container">
                    <hr className="section-title-line"></hr>
                    <Row>{props.aboutTheDistrict}</Row>
                  </Container>
                </Row>
              </Container>
            </Col>
            <Col xs={12} md={6} className="modal-col">
              <Container>
                <Row className="title-modal">
                  <h2>
                    {props.amount}
                    <span className="paymentType-style-modal">
                      {props.paymentType}
                    </span>
                  </h2>
                </Row>
              </Container>
              <Container className="pill-container-modal">
                <Row>
                  <Col>
                    <Badge pill className="pill-style-modal">
                      <FontAwesomeIcon icon="bed" className="icon-modal" />
                      {props.bed}
                    </Badge>{' '}
                  </Col>
                  <Col>
                    <Badge pill className="pill-style-modal">
                      <FontAwesomeIcon icon="bath" className="icon-modal" />
                      {props.bath}
                    </Badge>{' '}
                  </Col>
                  <Col>
                    <Badge pill className="pill-style-modal">
                      <FontAwesomeIcon
                        icon="vector-square"
                        className="icon-modal"
                      />
                      {props.size}
                    </Badge>{' '}
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row className="address-row-modal">
                  <p>
                    <FontAwesomeIcon
                      icon="map-marker-alt"
                      className="icon-modal"
                    />
                    <span className="address-content-modal">
                      {props.address}
                    </span>
                  </p>
                </Row>
              </Container>

              <Container>
                <Row className="button-row-modal">
                  <Button className="contact-button" size="md">
                    Contact
                  </Button>
                  <Button className="request-button" size="md">
                    Request for tour
                  </Button>
                </Row>
              </Container>

              <br></br>
              <Container>
                <Row className="content-container-modal">
                  <h4 className="section-title-modal">Description</h4>
                  <Container className="section-content-container">
                    <hr className="section-title-line"></hr>
                    <Row>{props.aboutTheDistrict}</Row>
                  </Container>
                </Row>
              </Container>

              <br></br>
              <Container>
                <Row className="content-container-modal">
                  <h4 className="section-title-modal">Features & Facts</h4>
                  <Container className="section-content-container">
                    <hr className="section-title-line"></hr>
                    <Row>{props.aboutTheDistrict}</Row>
                  </Container>
                </Row>
              </Container>
              <br></br>
              <Container>
                <Row className="content-container-modal">
                  <h4 className="section-title-modal">About the location</h4>

                  <Container className="section-content-container">
                    <hr className="section-title-line"></hr>
                    <Row>{props.aboutTheDistrict}</Row>
                  </Container>
                </Row>
              </Container>
              <Button className="contact-button-lg-modal" size="lg" block>
                Contact
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="close-button-modal" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function PropertyCard(props) {
  const [modalShow, setModalShow] = useState(false);
  console.log(props.image);
  return (
    <>
      <PropertyModalScreen
        show={modalShow}
        onHide={() => setModalShow(false)}
        image={props.image}
        images={props.images}
        amount={props.amount}
        bed={props.bed}
        bath={props.bath}
        size={props.size}
        address={props.address}
        deposit={props.deposit}
        paymentType={props.paymentType}
        aboutTheDistrict={props.aboutTheDistrict}
      />
      <Card className="property-card">
        <Card.Img
          variant="top"
          src={props.image}
          onClick={() => setModalShow(true)}
        />
        <Card.Body>
          <Card.Title className="property-title">
            {props.amount}{' '}
            <span className="paymentType-style">{props.paymentType}</span>
          </Card.Title>

          <Container className="pill-container">
            <Row>
              <Col className="pill-col">
                <Badge pill className="pill-style">
                  <FontAwesomeIcon icon="bed" className="icon" />
                  {props.bed}
                </Badge>
              </Col>
              <Col className="pill-col">
                <Badge pill className="pill-style">
                  <FontAwesomeIcon icon="bath" className="icon" />
                  {props.bath}
                </Badge>
              </Col>
              <Col className="pill-col">
                <Badge pill className="pill-style">
                  <FontAwesomeIcon icon="vector-square" className="icon" />
                  {props.size}
                </Badge>
              </Col>
            </Row>
          </Container>
          <Row className="address-row">
            <FontAwesomeIcon icon="map-marker-alt" className="icon" />
            <Card.Text className="address-content">{props.address}</Card.Text>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default PropertyCard;
