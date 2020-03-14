import React from 'react';

/**
 * renders the "How to play" section of the home page.
 * No props. static.
 */
class HowToPlay extends React.Component {
  render() {
    return( 
      <div id="how-to-play">
        <h2 class="text-center display-4 font-weight-bold"> How to Play </h2>
        <div>
          <h3 class="text-center">
            DebateNOW is a gameified Spontaneous Argumentation debate.
          </h3>
        </div>
        <div class="w-70">
          <ul>
            <li>Organize a game by choosing a randomly generated topic or by typing in your own.
            </li>
            <li>Choose two players to debate.</li>
            <li>Tell your friends to join in using the code provided.</li>
            <li>Press begin and SPAR!</li>
          </ul>
        </div>
        <div class="text-center">
          <img src={require("../../img/howtoplay.png")} class="content-image" alt="Two men thinking" />
        </div>
      </div>
    );
  }
}

export default HowToPlay;