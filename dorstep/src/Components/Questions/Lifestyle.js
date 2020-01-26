import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import '../Styles/Question.css';
import QuestionCard from '../../Widgets/QuestionCard';
import '../../Styles/Question.css';
import { Link, Route } from 'react-router-dom';

function Lifestyle() {
  return (
    <div>
      <Container className="question-box">
        <Row>
          <Col>
            <h1 className="question-main">What do you like to do?</h1>
          </Col>
        </Row>
        <Row className="explanation">
          <Col>
            <p>
              We'll use this to recommend the best place for you to live in
              Korea.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="selection-box">
        <Row>
          <Col xs={12} md={4}>
            <Link to="/questions/cities">
              <QuestionCard />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to="/questions/cities">
              <QuestionCard />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to="/questions/cities">
              <QuestionCard />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Lifestyle;
