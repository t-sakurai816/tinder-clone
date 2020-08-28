import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase'
import './TinderCards.css'

const TinderCards = () => {
  const [people, setPeople] = useState([]);
  
  const onSwipe = (direction) => { //スワイプの方向
    console.log('You swiped: ' + direction)
    // if(direction === 'right'){
    //   alert("右スワイプ")
    // }else if(direction === 'left') {
    //   alert("左スワイプ")
    // }
  }


  const onCardLeftScreen = (myidentifier) => {
    console.log(myidentifier + 'left the screen')
  }

  //Piece of code which runs based on a condition
  useEffect(() => {
    //this is where the code runs...

    const unsubscribe = database
      .collection('people')
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map(doc => doc.data()))
      );

    return () => {
      //this is cleanup...
      unsubscribe();
    };
  }, []);

  // BAD
  // const people = [];
  // people.push('sonny', 'qazi')

  // GOOD(Push to an array in React)
  // setPeople([...people, 'sonny','qazi'])

  return (
    <div>
      {/* <h1>Tinder Cards</h1> */}
      <div className="tinderCards__cardContainer">
        {people.map(person => (
          <TinderCard
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen('fooBar')} //スワイプ終了後に呼び出される
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']} //up, downにスワイプを阻止
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
      <div className="swipeDirection">
          {/* <p>hoge</p> */}
        <p></p>
      </div>
    </div>
  )
}

export default TinderCards;