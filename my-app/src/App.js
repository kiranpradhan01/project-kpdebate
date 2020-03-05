import React from 'react';
import Home from './Home.js';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import CreateGame from './CreateGame.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'; 

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/create-game">
              <CreateGame />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
      </Router>
      </div>
    );
  }

  Home() { // todo: pretty sure these are unused
    return <Home />
  }

  CreateGame() {
    return <CreateGame />
  }
}

export default App;