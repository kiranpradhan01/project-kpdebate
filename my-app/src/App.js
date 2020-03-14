import React from 'react';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Home from './Components/Home/Home.js';
import CreateGame from './Components/CreateGame/CreateGame.js';
import Game from './Components/Game/Game.js'
import history from './history.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      // sessionID: "4343",
      // player1: "Kiran",
      // player2: "Patrin",
      // topic: "Is cereal a soup?",
      // currentPhase: phases[0],
      // currentSpeaker: 0,
      // timer: null
    }
  }

  handleChange = (key, value) => {
    let stateChanges = {
      [key]: value
    };
    this.setState(stateChanges);
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Navbar />  
          <Switch>
            <Route path="/create-game" component={CreateGame}>
              <CreateGame updateGame={this.handleChange.bind(this)}/>
            </Route>
            <Route path="/game" component={Game}> 
              <Game/>
            <Route path="/#how-to-play">
              {/* how do we route to a lower part of the page */}
            </Route>
            </Route>
            <Route exact path="/" component={Home}>
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