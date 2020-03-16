import React from 'react';

/**
 * renders the "How to play" section of the home page.
 * No props. static.
 */
class HowToPlay extends React.Component {
  render() {
    return( 
      <div id="how-to-play">
        <h2 className="text-center display-4 font-weight-bold"> How to Play </h2>
        <div>
          <p className="subcaption text-center">
            Practice your debate skills with this simple proof-of-concept web game.
          </p>
        </div>
        {/* <div className="w-70">
          <ul>
            <li>Organize a game by choosing a randomly generated topic or by typing in your own.
            </li>
            <li>Choose two players to debate.</li>
            <li>Tell your friends to join in using the code provided.</li>
            <li>Press begin and SPAR!</li>
          </ul>
        </div> */}
        <div className="w-70 text-left">
          <p>One person must create the game with two debaters and a topic in mind. Audience members can
          join by using the provided game code. Watch the two go head to head, and then vote on the
          winners.</p>
          
          <p>Each debater takes turns going through the following phases in the debate format.</p>
          <ol>
            <li>Opening Statements. Each speaker gives their initial statements on why their argument is correct. Try to give a thesis and a few arguments.</li>
            <li>Rebuttal. Each speaker gets the chance to counter their opponent's initial statements. Try to remember their arguments and use reason to make them sound invalid.</li>
            <li>Cross-Examination. Each speaker gets to ask questions to their opponent for 3 minutes, hoping to poke holes in their arguments. The audience can join in too!</li>
            <li>Closing Statements. Each speaker delivers a final summary on their argument. Try to summarize where you succeeded and where your opponent fumbled!</li>
            <li>Voting. The debate is over! Time for Admin to enable voting for the audience.</li>
          </ol>

          <p>This app takes technical inspiration from<a target="_blank" href="https://kahoot.it/">kahoot.it</a>, and content inspiration the<a target="_blank" href="https://www.facinghistory.org/resource-library/teaching-strategies/spar-spontaneous-argumentation">Spontaneous Argumentation</a>debate event.</p>
        </div>
        <div className="text-center">
          <img src={require("../../img/howtoplay.png")} className="content-image" alt="Two men thinking" />
        </div>
      </div>
    );
  }
}

export default HowToPlay;