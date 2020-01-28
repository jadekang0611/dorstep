import React from 'react';
import PropertyCard from '../Widgets/PropertyCard';
import '../Styles/Question.css';
import { Link } from 'react-router-dom';
import { properties } from '../properties';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ShowProperties(props) {
  console.log(properties);
  console.log(props.location.state.payment);
  console.log(props.location.state.city)

  let results = properties.filter(function(item){
      if (item.city === props.location.state.city && item.paymentType === props.location.state.payment)
      {
          return true;
      }
      return false;
  });


  return (
    <div>
      <section className="section">
        <h1 className="question-main">Select properties you like!</h1>
      </section>
      <Container>
        <Row>
          {results.map(property => {
            return (
              <Col xs={6} md={4} lg={3} key={property.id}>
                <PropertyCard
                  image={property.images[0]}
                  images={property.images}
                  amount={`\u20A9 ` + property.amount}
                  paymentType={property.paymentType}
                  bed={property.noOfBed}
                  bath={property.noOfBath}
                  size={property.size}
                  address={property.street + `, ` + property.city}
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
