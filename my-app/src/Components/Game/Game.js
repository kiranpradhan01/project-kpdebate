import React from 'react';
import AudienceJoin from './AudienceJoin.js';
import Scoreboard from './Scoreboard.js';
import Timer from './Timer.js';
import Vote from './Vote.js';
import '../../css/game.css';

/**
 * manages the game's scoreboard and timer.
 * @prop {string} sessionID - the ID of the session being accessed
 * @prop {string} player1 - name of the first player
 * @prop {string} player2 - name of the second player
 * @prop {string} topic - the argument being debated
 * @prop {object} timerObject - the object representing the timer.
 * @prop {number} timeLeft - number of seconds left in the round.
 * @prop {string} timerLabel - the message labeling the current phase
 * @prop {function} updateGame - callback function to change the state of App
 */
class Game extends React.Component {
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
                            timerObject={this.props.timerObject}
                            timeLeft={this.props.timeLeft}
                            timerLabel={this.props.timerLabel}
                            updateGame={this.props.updateGame}/>
                        <Vote />
                        <AudienceJoin code={this.props.sessionID}/>
                    </div>
                );
        } else {
            return(
                <div>
                    <h2 id="error">Session does not yet exist.</h2>
                </div>
            );
        }        
    }
}

export default Game;