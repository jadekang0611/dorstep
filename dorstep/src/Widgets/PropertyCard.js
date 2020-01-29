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
              <Row className="carousel-row">
                <Carousel>
                  {props.images.map(image => {
                    return (
                      <Carousel.Item>
                        <img
                          className="d-block w-94"
                          src={image}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </Row>
              <br></br>
              <Row>
                <Image className="w-94" src="https://via.placeholder.com/375" fluid/>
              </Row>
              <br></br>
              <Container>
                <Row>
                  <h2>Nearby Places</h2>
                  <Container>
                    <Row>
                      Culpa laborum id ea laboris laboris aliqua labore ut
                      mollit commodo adipisicing aute fugiat. Veniam culpa
                      adipisicing proident quis ut consectetur. Esse
                      exercitation occaecat qui ut cupidatat ullamco. Sunt do
                      exercitation commodo tempor sit ex. Ullamco dolore sit ad
                      aliquip ex duis amet dolor sit nisi eiusmod ea laborum
                      sunt. Id amet est sint ullamco velit non dolore
                      adipisicing Lorem tempor consequat ut nulla. Velit anim
                      elit Lorem ut. Irure amet deserunt nisi nisi quis dolore
                      labore excepteur laboris eiusmod.
                    </Row>
                  </Container>
                </Row>
              </Container>
            </Col>
            <Col xs={12} md={6} className="modal-col">
              <Container>
                <Row>
                  <h2>{props.amount}</h2>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col>
                    <Badge pill variant="light">
                      <FontAwesomeIcon icon="tag" />
                      {props.paymentType}
                    </Badge>{' '}
                  </Col>
                  <Col>
                    <Badge pill variant="light">
                      <FontAwesomeIcon icon="bed" />
                      {props.bed}
                    </Badge>{' '}
                  </Col>
                  <Col>
                    <Badge pill variant="light">
                      <FontAwesomeIcon icon="bath" />
                      {props.bath}
                    </Badge>{' '}
                  </Col>
                  <Col>
                    <Badge pill variant="light">
                      <FontAwesomeIcon icon="vector-square" />
                      {props.size}
                    </Badge>{' '}
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <p>
                    <FontAwesomeIcon icon="map-marker-alt" />
                    {props.address}
                  </p>
                </Row>
              </Container>

              <Button variant="primary" size="lg" block>
                Contact
              </Button>

              <hr></hr>
              <br></br>
              <Container>
                <Row>
                  <h2>Description</h2>
                  <Container>
                    <Row>
                      Culpa laborum id ea laboris laboris aliqua labore ut
                      mollit commodo adipisicing aute fugiat. Veniam culpa
                      adipisicing proident quis ut consectetur. Esse
                      exercitation occaecat qui ut cupidatat ullamco. Sunt do
                      exercitation commodo tempor sit ex. Ullamco dolore sit ad
                      aliquip ex duis amet dolor sit nisi eiusmod ea laborum
                      sunt. Id amet est sint ullamco velit non dolore
                      adipisicing Lorem tempor consequat ut nulla. Velit anim
                      elit Lorem ut. Irure amet deserunt nisi nisi quis dolore
                      labore excepteur laboris eiusmod.
                    </Row>
                  </Container>
                </Row>
              </Container>

              <br></br>
              <Container>
                <Row>
                  <h2>Features</h2>
                  <Container>
                    <Row>
                      Culpa laborum id ea laboris laboris aliqua labore ut
                      mollit commodo adipisicing aute fugiat. Veniam culpa
                      adipisicing proident quis ut consectetur. Esse
                      exercitation occaecat qui ut cupidatat ullamco. Sunt do
                      exercitation commodo tempor sit ex. Ullamco dolore sit ad
                      aliquip ex duis amet dolor sit nisi eiusmod ea laborum
                      sunt. Id amet est sint ullamco velit non dolore
                      adipisicing Lorem tempor consequat ut nulla. Velit anim
                      elit Lorem ut. Irure amet deserunt nisi nisi quis dolore
                      labore excepteur laboris eiusmod.
                    </Row>
                  </Container>
                </Row>
              </Container>
              <br></br>
              <Container>
                <Row>
                  <h2>About the location</h2>

                  <Container>
                    <Row>{props.aboutTheDistrict}</Row>
                  </Container>
                </Row>
              </Container>
              <Button variant="primary" size="lg" block>
                Contact
              </Button>
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

          <Container className="pill-row">
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
