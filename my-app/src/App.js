import React from 'react';
import Home from './Home.js';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import CreateGame from './CreateGame.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'; 

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav> */}
          <Navbar />
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/create-game">
              <CreateGame />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <Footer />
        </div>
      </Router>
        {/* <div className="Home">
          <Navbar />
          <Home />
          <Footer />
        </div>
        <div className="Home">
          <Navbar/>
          <CreateGame/>
          <Footer/>
        </div> */}
      </div>
    );
  }

  Home() {
    return <Home />
  }

  CreateGame() {
    return <CreateGame />
  }
}

export default App;