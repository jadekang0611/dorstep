import React from 'react';
import QuestionCard from '../../Widgets/QuestionCard';
import '../../Styles/Question.css';
import { Link } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck';

function Cities() {
  return (
    <div>
      <div>
        <section className="section">
          <h1 className="question-main">Where do you like to live?</h1>

          <p className="explanation">
            We'll use this to recommend the best place for you to live in Korea.
          </p>
        </section>

        <CardDeck>
          <Link to={{
            pathname: "/questions/payment",
            state: {
              city: 'Banghwa-dong'
            }
            }}>
            <QuestionCard
              image={'https://via.placeholder.com/250'}
              title={'Lifestyle One'}
              description={'This is the lifestyle.'}
            />
          </Link>

          <Link to="/questions/payment">
            <QuestionCard
              image={'https://via.placeholder.com/250'}
              title={'Lifestyle One'}
              description={'This is the lifestyle.'}
            />
          </Link>

          <Link to="/questions/payment">
            <QuestionCard
              image={'https://via.placeholder.com/250'}
              title={'Lifestyle One'}
              description={'This is the lifestyle.'}
            />
          </Link>
        </CardDeck>
        <CardDeck>
          <Link to="/questions/payment">
            <QuestionCard
              image={'https://via.placeholder.com/250'}
              title={'Lifestyle One'}
              description={'This is the lifestyle.'}
            />
          </Link>

          <Link to="/questions/payment">
            <QuestionCard
              image={'https://via.placeholder.com/250'}
              title={'Lifestyle One'}
              description={'This is the lifestyle.'}
            />
          </Link>

          <Link to="/questions/payment">
            <QuestionCard
              image={'https://via.placeholder.com/250'}
              title={'Lifestyle One'}
              description={'This is the lifestyle.'}
            />
          </Link>
        </CardDeck>
      </div>
    </div>
  );
}

export default Cities;
