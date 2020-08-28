import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase'
import './TinderCards.css'

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  //Piece of code which runs based on a condition
  useEffect (() => {
    //this is where the code runs...
    database.collection('people').onSnapshot(snapshot => (
      setPeople(snapshot.docs.map(doc => doc.data()))
    ))
    //this will run ONCE when the component loads, and never again
  },[]);

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