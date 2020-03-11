import React from 'react';
import Home from './Components/Home/Home.js';
import Navbar from './Components/General/Navbar.js';
import Footer from './Components/General/Footer.js';
import CreateGame from './Components/CreateGame/CreateGame.js';
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
}

export default App;