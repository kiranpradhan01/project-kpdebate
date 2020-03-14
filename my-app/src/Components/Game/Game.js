import React from 'react';
import AudienceJoin from './AudienceJoin.js';
import Scoreboard from './Scoreboard.js';
import Timer from './Timer.js';
import '../../css/game.css';

/**
 * manages the game's scoreboard and timer.
 * @prop {string} sessionID - the ID of the session being accessed
 * @prop {string} player1 - name of the first player
 * @prop {string} player2 - name of the second player
 * @prop {string} topic - the argument being debated
 */
class Game extends React.Component {
    render() {
        // ? at some point we'll have to check if things like topic/player names are properly
        // ? defined in the state of `App.js`. Because if they aren't yet, then this page should
        // ? safely display an error message instead of the game.
        return(
            <div>
                <Scoreboard 
                    player1={this.props.player1} 
                    player2={this.props.player2} 
                    topic={this.props.topic} 
                />
                <Timer /> {/*TODO: the font-awesome icons arent implemented*/}
            </div>
        );
        
    }
}

export default Game;