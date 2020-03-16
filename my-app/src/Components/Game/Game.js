import React from 'react';
import AudienceJoin from './AudienceJoin.js';
import Scoreboard from './Scoreboard.js';
import Timer from './Timer.js';
import Vote from './Vote.js';
import firebase from 'firebase/app';
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
    constructor(props) {
        super(props);
        this.state = {
            sessionIsGood: false
        } 
    }
    
    // check if sessionID entered exists in firebase
    componentDidMount() {
        firebase.database().ref('sessions/' + this.props.sessionID).once('value', (snapshot) => {
            if (snapshot.exists()) {
                let sesh = snapshot.val();
                console.log(sesh);
                this.setState({
                    player1: sesh.player1,
                    player2: sesh.player2,
                    topic: sesh.topic, 
                    sessionIsGood: true});
            }
        })
    }

    render() {
        if (this.state.sessionIsGood) {
                return(
                    <div>
                        <Scoreboard 
                            player1={this.state.player1} 
                            player2={this.state.player2} 
                            topic={this.state.topic} 
                        />
                        <Timer 
                            player1={this.state.player1}
                            player2={this.state.player2}
                            timerObject={this.props.timerObject}
                            timeLeft={this.props.timeLeft}
                            phaseIndex={this.props.currentPhase}
                            phases={this.props.phases}
                            isAdminTimer={false}
                            updateGame={this.props.updateGame}
                        />
                        <Vote 
                            disableVoting={this.props.disableVoting}
                            displayWinner={this.props.displayWinner}
                            code={this.props.sessionID}
                        />
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