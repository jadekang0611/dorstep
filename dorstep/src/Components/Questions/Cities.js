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
          <Link
            to={{
              pathname: '/questions/payment',
              state: {
                district: 'Gangseo-gu'
              }
            }}
          >
            <QuestionCard
              image={'../../images/gangseo.jpg'}
              title={'Gangseo-gu'}
              description={'This is the lifestyle.'}
            />
          </Link>

          <Link
            to={{
              pathname: '/questions/payment',
              state: {
                district: 'Gangnam-gu'
              }
            }}
          >
            <QuestionCard
              image={'../../images/gangnam.jpg'}
              title={'Gangnam-gu'}
              description={'This is the lifestyle.'}
            />
          </Link>
        </CardDeck>
        <CardDeck>
          <Link
            to={{
              pathname: '/questions/payment',
              state: {
                district: 'Mapo-gu'
              }
            }}
          >
            <QuestionCard
              image={'../../images/mapo.jpg'}
              title={'Mapo-gu'}
              description={'This is the lifestyle.'}
            />
          </Link>

          <Link
            to={{
              pathname: '/questions/payment',
              state: {
                district: 'Yongsan-gu'
              }
            }}
          >
            <QuestionCard
              image={'../../images/yongsan.jpeg'}
              title={'Yongsan-gu'}
              description={'This is the lifestyle.'}
            />
          </Link>
        </CardDeck>
      </div>
    </div>
  );
}

export default Cities;
