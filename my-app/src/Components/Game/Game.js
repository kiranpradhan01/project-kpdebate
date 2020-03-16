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
 * @prop {object} phases - const object of the phases of the debate.
 * @prop {function} updateGame - callback function to change the state of App
 */
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionIsGood: false,
            firebaseListener: null

            /* The following are fields retrieved from Firebase:
                player1
                player2
                topic
                timerObject?
                timeLeft
                currentPhase
                disableVoting
                displayWinner
            */
        } 
    }
    
    /**
     * establish a firebase connection to init the page, as well as
     * a timer that can update the page every second using firebase information
     */
    componentDidMount() {
        firebase.database().ref('sessions/' + this.props.sessionID).once('value', (snapshot) => {
            if (snapshot.exists()) {
                let sesh = snapshot.val();
                console.log(sesh);
                this.setState({
                    player1: sesh.player1,
                    player2: sesh.player2,
                    topic: sesh.topic, 
                    timeLeft: sesh.timeLeft,
                    currentPhase: sesh.currentPhase,
                    disableVoting: sesh.enable,
                    displayWinner: sesh.displayWinner,
                    sessionIsGood: true});
            }
        });
        // set up a timer that updates App's state every 1 second with firebase data about
        // the game with session=this.props.sessionID
        // ? wait theres totally an event listener for whenever Firebase info changes
        this.state.firebaseListener = setInterval(() => {
            firebase.database().ref('sessions/' + this.props.sessionID).once('value', (snapshot) => {
                if (snapshot.exists()) {
                    console.log("snapshot found!");
                } else {
                    console.log("snapshot missing.");
                    this.state.sessionID = "error";
                }
            });
        }, 1000);
    }

    /**
     * removes the timer listening for Firebase changes.
     */
    componentWillUnmount() {
        // remove the timer/event listener that updates based on Firebase changes
        clearInterval(this.state.firebaseListener);
        this.state.firebaseListener = null;
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
                            timerObject={this.props.timerObject} // useless
                            timeLeft={this.state.timeLeft}
                            phaseIndex={this.state.currentPhase}
                            phases={this.props.phases}
                            isAdminTimer={false}
                            updateGame={this.props.updateGame}
                        />
                        <Vote 
                            disableVoting={this.state.disableVoting}
                            displayWinner={this.state.displayWinner}
                            code={this.props.sessionID}
                        />
                        <AudienceJoin code={this.props.sessionID}/>
                    </div>
                );
        } else {
            return(
                <div>
                    <h2 id="error">Error. This session does not yet exist.</h2>
                </div>
            );
        }     
    }
}

export default Game;