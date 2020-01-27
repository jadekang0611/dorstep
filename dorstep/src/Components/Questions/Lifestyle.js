import React from 'react';
import QuestionCard from '../../Widgets/QuestionCard';
import '../../Styles/Question.css';
import { Link } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck';

function Lifestyle() {
  return (
    <div>
      <section className="section">
        <h1 className="question-main">What do you like to do?</h1>

        <p className="explanation">
          We'll use this to recommend the best place for you to live in Korea.
        </p>
      </section>

      <CardDeck>
        <Link to="/questions/cities">
          <QuestionCard
            image={'https://via.placeholder.com/250'}
            title={'Lifestyle One'}
            description={'This is the lifestyle.'}
          />
        </Link>

        <Link to="/questions/cities">
          <QuestionCard
            image={'https://via.placeholder.com/250'}
            title={'Lifestyle One'}
            description={'This is the lifestyle.'}
          />
        </Link>

        <Link to="/questions/cities">
          <QuestionCard
            image={'https://via.placeholder.com/250'}
            title={'Lifestyle One'}
            description={'This is the lifestyle.'}
          />
        </Link>
      </CardDeck>
      <CardDeck>
        <Link to="/questions/cities">
          <QuestionCard
            image={'https://via.placeholder.com/250'}
            title={'Lifestyle One'}
            description={'This is the lifestyle.'}
          />
        </Link>

        <Link to="/questions/cities">
          <QuestionCard
            image={'https://via.placeholder.com/250'}
            title={'Lifestyle One'}
            description={'This is the lifestyle.'}
          />
        </Link>

        <Link to="/questions/cities">
          <QuestionCard
            image={'https://via.placeholder.com/250'}
            title={'Lifestyle One'}
            description={'This is the lifestyle.'}
          />
        </Link>
      </CardDeck>
    </div>
  );
}

export default Lifestyle;
