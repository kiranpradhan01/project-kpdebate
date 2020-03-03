import React from 'react';

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
          <a className="navbar-brand" href="index.html">
            <img src="img/law.png" width="30" height="30" className="d-inline-block align-top logo" alt="A gavel"/>
            DebateNOW
          </a>
        </div>
        <div id="nav-links">
          <a href="index.html">Home</a>
          <a href="index.html#how-to-play">How to Play</a>
          <a href="create-game.html">Create New Game</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;