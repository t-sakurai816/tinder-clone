import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


const App = () => {
  return (
    <div className="App">
      {/* <h1>Let's build the TINDER Clone App !</h1> */}
      <Router>
        <Switch>
          <Route path="/chat">
            <Header backButton="/"/>
            <Chats />
          </Route>
          <Route path="/"> {/*1番上に持ってきてはいけない*/}
            <Header />  
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
