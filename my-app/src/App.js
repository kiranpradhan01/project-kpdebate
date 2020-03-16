import React from 'react';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Home from './Components/Home/Home.js';
import CreateGame from './Components/CreateGame/CreateGame.js';
import AdminGame from './Components/Game/AdminGame.js';
import Game from './Components/Game/Game.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'; 

import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyBRMu88J7_n4IVzqLYfrObctzfSi-_FnP0",
  authDomain: "project-kpdebate.firebaseapp.com",
  databaseURL: "https://project-kpdebate.firebaseio.com",
  projectId: "project-kpdebate",
  storageBucket: "project-kpdebate.appspot.com",
  messagingSenderId: "14281407017",
  appId: "1:14281407017:web:8d8edc6edc9fa427fe7a38",
  measurementId: "G-L8RHQ63M0E"
};

firebase.initializeApp(firebaseConfig);

// TODO: Whenever state of the current game changes in Firebase, update this.state
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // sessionID: "4343",
      // player1: "Kiran",
      // player2: "Patrin",
      // topic: "Is cereal a soup?",
      // currentSpeaker: 0,
      // timerObject: null
      currentPhase: 0,
      enable: false,
      displayWinner: false,
      timeLeft: 60,
      phases: [{
        title: "Opening Statement",
        speaker: 1,
        seconds: 60
      },
      {
        title: "Opening Statement",
        speaker: 2,
        seconds: 60
      },
      {
        title: "Rebuttal",
        speaker: 1,
        seconds: 60
      },
      {
        title: "Rebuttal",
        speaker: 2,
        seconds: 60
      },
      {
        title: "Cross Examination",
        speaker: 1,
        seconds: 180
      },
      {
        title: "Cross Examination",
        speaker: 2,
        seconds: 180
      },
      {
        title: "Closing Statements",
        speaker: 1,
        seconds: 60
      },
      {
        title: "Closing Statements",
        speaker: 2,
        seconds: 60
      },
      {
        title: "Voting",
        seconds: 0
      }]
    }
    console.log(this.state);
  }

  handleChange = (key, value) => {
    let stateChanges = {
      [key]: value
    };
    this.setState(stateChanges);
  }

  render() {
    let gameProps = { // ! This is hardcoded content to make sure the `Game` page is working
      code: 1234,
      p1: "Patrin",
      p2: "Kiran",
      topic: "Qdoba is better than Chipotle"
    };
    return (
      <div className="App">
        <Router>
          <Navbar />  
          <Switch>
            <Route path="/game" component={Game}> 
              <Game 
                sessionID={gameProps.code}
                player1={gameProps.p1} 
                player2={gameProps.p2} 
                topic={gameProps.topic} 
                timerObject={this.state.timerObject}
                timeLeft={this.state.timeLeft}
                currentPhase={this.state.currentPhase}
                phases={this.state.phases}
                updateGame={this.handleChange.bind(this)}
                disableVoting={!this.state.enable}
                displayWinner={this.state.displayWinner}
                />
            </Route>
            <Route path="/#how-to-play">
              {/* how do we route to a lower part of the page */}
            </Route>
            <Route path="/create-game" component={CreateGame}>
              <CreateGame updateGame={this.handleChange.bind(this)}/>
            </Route>
            <Route path="/admin-game" component={Game}> 
              <AdminGame 
                sessionID={gameProps.code}
                player1={gameProps.p1} 
                player2={gameProps.p2} 
                topic={gameProps.topic} 
                timerObject={this.state.timerObject}
                timeLeft={this.state.timeLeft}
                currentPhase={this.state.currentPhase}
                phases={this.state.phases}
                updateGame={this.handleChange.bind(this)}
                disableVoting={!this.state.enable}
                displayWinner={this.state.displayWinner}
                />
            </Route>
            <Route path="/" component={Home}>
              <Home updateGame={this.handleChange.bind(this)}/>
            </Route>
          </Switch>
          <Footer />  
      </Router>
      </div>
    );
  } 
}

export default App;