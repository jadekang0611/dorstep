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

function MydModalWithGrid(props) {
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
              <Row>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://via.placeholder.com/500"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://via.placeholder.com/500"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://via.placeholder.com/500"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://via.placeholder.com/500"
                      alt="Fourth slide"
                    />

                    <Carousel.Caption>
                      <h3>Fourth slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Row>
              <br></br>
              <Row>
                <Image src="https://via.placeholder.com/500" fluid />
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
            <Col xs={12} md={6}>
              <Container>
                <Row>
                  <h1>This is the price</h1>
                  <h3>This is the property name</h3>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col>
                    <Badge pill variant="light">
                      bed
                    </Badge>{' '}
                  </Col>
                  <Col>
                    <Badge pill variant="light">
                      bath
                    </Badge>{' '}
                  </Col>
                  <Col>
                    <Badge pill variant="light">
                      size
                    </Badge>{' '}
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <p>Douglas, Irvine, California 92612</p>
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
                    <Row>
                      In deserunt nulla occaecat pariatur ex amet ex mollit
                      veniam et cillum eu. Ullamco veniam commodo non eu id
                      dolore. Aliquip Lorem excepteur nostrud in do. Nostrud
                      mollit et ut nisi esse ex voluptate. Do adipisicing magna
                      culpa qui.
                    </Row>
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
  return (
    <>
      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
      <Card className="property-card">
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
