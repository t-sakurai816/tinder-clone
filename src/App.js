import React from 'react';
import Header from './Header'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


const App = () => {
  return (
    <div className="App">
      {/* <h1>Let's build the TINDER Clone App !</h1> */}
      <Router>
      {/* Header */}
      <Header />
        <Switch>
          <Route path="/chat">
            <h1>I am the chatpage</h1>
          </Route>
          <Route path="/"> {/*1番上に持ってきてはいけない*/}
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
        {/* Thinder Cards */}
        {/* Buttons below tinder cards */}

        {/* Chats screen */}
        {/* Individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
