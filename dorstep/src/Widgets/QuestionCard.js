import React from 'react';
import Figure from 'react-bootstrap/Figure';

class QuestionCard extends React.Component {
  render() {
    return (
      <div>
        <Figure>
          <Figure.Image
            width={250}
            height={250}
            alt="171x180"
            src="https://via.placeholder.com/250"
          />
        </Figure>
      </div>
    );
  }
}

export default QuestionCard;
