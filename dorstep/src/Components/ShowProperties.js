import React from 'react';
import PropertyCard from '../Widgets/PropertyCard';
import '../Styles/Question.css';
import { Link } from 'react-router-dom';
import { properties } from '../properties';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                <PropertyCard
                  image={property.images[0]}
                  title={property.title}
                  description={property.city}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default ShowProperties;
