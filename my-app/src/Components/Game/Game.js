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
 * @prop {function} updateGame - callback function to change the state of App
 */
class Game extends React.Component {
    render() {
        if (this.props.sessionID && this.props.player1 && 
            this.props.player2 && this.props.topic) {
                console.log(this.props);
                return(
                    <div>
                        <Scoreboard 
                            player1={this.props.player1} 
                            player2={this.props.player2} 
                            topic={this.props.topic} 
                        />
                        <Timer 
                            timerObject={null}
                            timeLeft={60}
                            timerLabel={"Patrin's Opening Statement"}
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