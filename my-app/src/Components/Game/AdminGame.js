import React from 'react';
import AudienceJoin from './AudienceJoin.js';
import Scoreboard from './Scoreboard.js';
import Timer from './Timer.js';
import Controls from './Controls';
import WinnerModal from './WinnerModal.js';
import '../../css/game.css';

/**
 * manages the game's scoreboard and timer.
 * closing the Admin Game of a session will pause the timer and end the debate.
 * @prop {string} sessionID - the ID of the session being accessed
 * @prop {string} player1 - name of the first player
 * @prop {string} player2 - name of the second player
 * @prop {string} topic - the argument being debated
 * @prop {object} timerObject - the object representing the timer.
 * @prop {number} timeLeft - number of seconds left in the round.
 * @prop {string} timerLabel - the message labeling the current phase
 * @prop {function} updateGame - callback function to change the state of App
 */
class AdminGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        if (this.props.sessionID && this.props.player1 && 
            this.props.player2 && this.props.topic) {
            return(
                <div>
                    <Scoreboard 
                        player1={this.props.player1} 
                        player2={this.props.player2} 
                        topic={this.props.topic} 
                    />
                    <Timer 
                        sessionID={this.props.sessionID}
                        player1={this.props.player1}
                        player2={this.props.player2}
                        timerObject={this.props.timerObject}
                        timeLeft={this.props.timeLeft}
                        phaseIndex={this.props.currentPhase}
                        phases={this.props.phases}
                        isAdminTimer={true}
                        updateGame={this.props.updateGame}
                    />
                    <Controls 
                        phaseIndex={this.props.currentPhase}
                        phases={this.props.phases}
                        updateGame={this.props.updateGame} 
                    />
                    <AudienceJoin code={this.props.sessionID} />
                    <WinnerModal show={this.props.displayWinner} winner={this.getWinner()}/>
                </div>
            );
        } else {
            return(
                <div>
                    <h2 id="error">Session does not yet exist.</h2>
                    <div class="extra-space"></div>
                </div>
            );
        }
    }

    getWinner() {
        if (this.props.votes > 0) {
            return this.props.player1;
        } else if (this.props.votes < 0) {
            return this.props.player2;
        } else {
            return("both " + this.props.player1 + " and " + this.props.player2 + "! It's a tie");
        }
    }
}

export default AdminGame;