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
      // playerNames: ["Patrin", "Kiran"],
      // topic: "Is cereal a soup?",
      // currentPhase: phases[0],
      // currentSpeaker: 0,
      // timer: null
    }
  }

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Navbar />  
          <Switch>
            <Route path="/create-game" component={CreateGame}>
              <CreateGame />
            </Route>
            <Route path="/game" component={Game}> 
              <Game/>
            <Route path="/#how-to-play">
              
            </Route>
            </Route>
            <Route path="/" component={Home}>
              <Home/>
            </Route>
          </Switch>
          <Footer />
      </Router>
      </div>
    );
  } 
}

export default App;