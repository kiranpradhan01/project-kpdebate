import React from 'react';
import AudienceJoin from './AudienceJoin.js';
import Scoreboard from './Scoreboard.js';
import Timer from './Timer.js';
import Controls from './Controls';
import '../../css/game.css';

import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

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
class AdminGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // maybe we store the account name of the admin? So only the owner of this session
            // can access this session's AdminGame page
        }
    }

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => {
                this.setState({isSignedIn: !!user}, () => {
                    this.props.updateGame("isSignedIn", !!user)
                    // this.props.updateGame("uid", user.uid)
                })

            }
        );
    }

    // why do we need to this again? should it be in here or App?
    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    render() {
        // must sign in to access admin game page
        if (!this.state.isSignedIn) {
            return (
                <div>
                <h1>DebateNOW</h1>
                <br></br>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth uiConfig={this.props.uiConfig} firebaseAuth={firebase.auth()}/>
                </div>
            );
        }
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

export default AdminGame;