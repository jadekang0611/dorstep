import React from 'react';
import Card from 'react-bootstrap/Card';

class QuestionCard extends React.Component {
  render() {
    return (
      <>
        <Card>
          <Card.Img variant="top" src={this.props.image} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default QuestionCard;
