import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css'

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: 'steve jobs',
      url: 'https://jabble.jp/wp-content/uploads/2017/07/SteveJobsBook.jpg'
    },
    {
      name: 'mark zuckerberg',
      url: 'https://api.time.com/wp-content/uploads/2020/07/Mark-Zuckerberg-Surfing.jpg'
    }
  ]);

  // BAD
  // const people = [];
  // people.push('sonny', 'qazi')

  // GOOD(Push to an array in React)
  // setPeople([...peoplem, 'sonny','qazi'])

  return (
    <div>
      <h1>Tinder Cards</h1>
      <div className="tinderCards__cardContainer">
        {people.map(person => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards;