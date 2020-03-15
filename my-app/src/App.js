import React from 'react';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Home from './Components/Home/Home.js';
import CreateGame from './Components/CreateGame/CreateGame.js';
import AdminGame from './Components/Game/AdminGame.js';
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
      // timerObject: null
      timerLabel: "Patrin's Opening Statement", // should probably be null at first
      timeLeft: 60
    }
  }

  handleChange = (key, value) => {
    let stateChanges = {
      [key]: value
    };
    this.setState(stateChanges);
    console.log(this);
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
        <Router history={history}>
          <Navbar />  
          <Switch>
            <Route path="/game" component={Game}> 
<<<<<<< HEAD
              <Game 
                sessionID={gameProps.code}
                player1={gameProps.p1} 
                player2={gameProps.p2} 
                topic={gameProps.topic} 
                timerObject={this.state.timerObject}
                timeLeft={this.state.timeLeft}
                timerLabel={"Patrin's Opening Statement"}
                updateGame={this.handleChange.bind(this)} />
=======
              <Game player1={"Patrin"} player2={"Kiran"} topic={"Qdoba is better than Chipotle"} />
>>>>>>> 6e46860888dc75a1b9a0166296ce88f1d1745451
            </Route>
            <Route path="/#how-to-play">
              {/* how do we route to a lower part of the page */}
            </Route>
            <Route path="/create-game" component={CreateGame}>
              <CreateGame updateGame={this.handleChange.bind(this)}/>
            </Route>
            <Route path="/admin-game" component={Game}> 
              <AdminGame/>
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