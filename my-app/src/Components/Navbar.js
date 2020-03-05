import React from 'react';
import { Link } from 'react-router-dom';
/**
 * renders the website navbar.
 * static
 * used on all pages
 */
class Navbar extends React.Component {
  render() {
    return(
      <nav className="navbar fixed-top navbar-light">
        <div className="d-flex justify-content-between">
          {/* <a className="navbar-brand" href="index.html">
            <img src="img/law.png" width="30" height="30" className="d-inline-block align-top logo" alt="A gavel"/>
            DebateNOW
          </a> */}
          <Link to="/" className="navbar-brand">
            <img src="img/law.png" width="30" height="30" className="d-inline-block align-top logo" alt="A gavel"/>
            DebateNOW
          </Link>
        </div>
        <div id="nav-links">
          <Link to="/">Home</Link>
          <Link to="/#how-to-play">How to Play</Link>
          <Link to="/create-game">Create New Game</Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;