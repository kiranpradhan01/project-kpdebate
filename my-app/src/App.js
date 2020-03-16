import React from 'react';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Home from './Components/Home/Home.js';
import CreateGame from './Components/CreateGame/CreateGame.js';
import AdminGame from './Components/Game/AdminGame.js';
import Game from './Components/Game/Game.js';
import LogIn from './Components/LogIn.js';
import './css/firebaseui-styling.global.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'; 

import firebase from 'firebase/app';
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

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
};

const phases = [{
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
  }];

// ! firebase won't update if sessionID is empty.
// ! test that the new version of phase, in a CONSTANT is still working
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
      isSignedIn: false,
      timeLeft: 60,
      votes: 0
    }
    console.log(this.state.sessionID);
  }

  /**
   * callback function provided to subcomponents.
   * updates App's state for various changes made.
   * Also updates firebase to maintain a decentralized connection.
   */
  handleChange = (key, value) => {
    let stateChanges = {
      [key]: value
    };
    this.setState(stateChanges);

    if (this.state.sessionID) {
      this.sessionRef = firebase.database().ref('sessions/' + this.state.sessionID);
      this.sessionRef.set(this.state);
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar isSignedIn={this.state.isSignedIn} 
            updateGame={this.handleChange.bind(this)}/>  
          <Switch>
            <Route path="/game" component={Game}> 
              <Game 
                sessionID={this.state.sessionID}
                player1={this.state.player1} 
                player2={this.state.player2} 
                topic={this.state.topic} 
                timerObject={this.state.timerObject}
                timeLeft={this.state.timeLeft}
                currentPhase={this.state.currentPhase}
                phases={phases}
                updateGame={this.handleChange.bind(this)}
                disableVoting={!this.state.enable}
                displayWinner={this.state.displayWinner}
                />
            </Route>
            <Route path="/create-game" component={CreateGame}>
              <CreateGame updateGame={this.handleChange.bind(this)}/>
            </Route>
            <Route path="/admin-game" component={Game}> 
              <AdminGame 
                sessionID={this.state.sessionID}
                player1={this.state.player1} 
                player2={this.state.player2} 
                topic={this.state.topic} 
                timerObject={this.state.timerObject}
                timeLeft={this.state.timeLeft}
                currentPhase={this.state.currentPhase}
                phases={phases}
                updateGame={this.handleChange.bind(this)}
                disableVoting={!this.state.enable}
                displayWinner={this.state.displayWinner}
                uiConfig={uiConfig}
                />
            </Route>
            <Route path="/sign-in">
              <LogIn uiConfig ={uiConfig} fbAuth = {firebase.auth()}/>                         
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