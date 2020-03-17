import React from 'react';
import AudienceJoin from './AudienceJoin.js';
import Scoreboard from './Scoreboard.js';
import Timer from './Timer.js';
import Vote from './Vote.js';
import firebase from 'firebase/app';
import '../../css/game.css';

/**
 * intended for audience members who join an existing game.
 * manages the game's scoreboard and timer.
 * @prop {string} sessionID - the ID of the session being accessed
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
                timeLeft
                currentPhase
                disableVoting
                displayWinner
            */
        } 
    }
    
    /**
     * establish a firebase connection. Every x seconds, this pings firebase for updates
     * provided from AdminGame.
     */
    componentDidMount() {
        let updateInterval = 300; /* CONFIG: length of time between each server ping */

        this.state.firebaseListener = setInterval(() => {
            firebase.database().ref('sessions/' + this.props.sessionID).once('value', (snapshot) => {
                if (snapshot.exists()) {
                    let sesh = snapshot.val();
                    this.setState({
                        player1: sesh.player1,
                        player2: sesh.player2,
                        topic: sesh.topic, 
                        timeLeft: sesh.timeLeft,
                        currentPhase: sesh.currentPhase,
                        disableVoting: !sesh.enable,
                        displayWinner: sesh.displayWinner,
                        votes: sesh.votes,
                        sessionIsGood: true});
                }
            });
        }, updateInterval);
    }

    /**
     * removes the timer listening for Firebase changes.
     */
    componentWillUnmount() {
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
                            timeLeft={this.state.timeLeft}
                            phaseIndex={this.state.currentPhase}
                            phases={this.props.phases}
                            isAdminTimer={false}
                            updateGame={this.props.updateGame}
                        />
                        <Vote 
                            player1={this.state.player1}
                            player2={this.state.player2}
                            votes={this.state.votes}
                            sessionID={this.props.sessionID}
                            disableVoting={this.state.disableVoting}
                            displayWinner={this.state.displayWinner}
                            updateGame={this.props.updateGame}
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