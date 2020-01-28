import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import QuestionCard from '../../Widgets/QuestionCard';
import '../../Styles/Question.css';
import { Link } from 'react-router-dom';

function Payment(props) {

  return (
    <div>
      <div>
        <section className="section">
          <h1 className="question-main">How would you like to pay?</h1>

          <p className="explanation">
            We'll use this to recommend the best place for you to live in Korea.
          </p>
        </section>

        <CardDeck>
          <Link to={{
            pathname: "/questions/properties",
            state:{
              district: props.location.state.district,
              payment: 'Lump-sum'
            }
            }}>
            <QuestionCard
              image={'https://via.placeholder.com/250'}
              title={'Payment One'}
              description={'This is the payment.'}
            />
          </Link>

          <Link to={{
            pathname: "/questions/properties",
            state:{
              district: props.location.state.district,
              payment: "Monthly"
            }
            }}>
            <QuestionCard
              image={'https://via.placeholder.com/250'}
              title={'Payment Two'}
              description={'This is the payment.'}
            />
          </Link>
        </CardDeck>
      </div>
    </div>
  );
}

export default Payment;
