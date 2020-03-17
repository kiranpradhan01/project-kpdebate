import React from 'react';
import Button from 'react-bootstrap/Button';
import '../../css/game.css';

/**
 * used to control which phase of the debate currently going.
 * @prop {number} phaseIndex - the current phase of the debate.
 * @prop {object} phases - const object of the phases of the debate.
 * @prop {function} updateGame - the callback function used to update App's state
 */
class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enable: false,
            disable: true,
            winner: true,
        }
    }

    buttonClicked = (key) => {
        // update state to toggle button disabled
        let stateChanges = {};
        if (key === "enable") {
            stateChanges = {
                "enable": true,
                "disable": false,
                "winner": true
            };
            // lift up voting state to App
            this.props.updateGame("enable", true); // enable audience voting
        } else if (key === "disable") {
            stateChanges = {
                "enable": false,
                "disable": true,
                "winner": false
            };
            this.props.updateGame("enable", false); // disable audience voting
        } else {
            stateChanges = {
                "enable": true,
                "disable": true,
                "winner": true
            };
            this.props.updateGame("enable", false); // disable audience voting
            this.props.updateGame("displayWinner", true); // display winner to audience
        }
        this.setState(stateChanges);
    }

    render() {
        return (
            <div className="text-center"> 
                <div className="btn-group btn-group-lg" role="group" aria-label="">
                    <button onClick={() => this.prevPhase()} type="button" className="btn btn-outline-primary btn-secondary"><i
                            className="fa fa-step-forward fa-flip-horizontal" aria-label="backward"
                            aria-hidden="true"></i></button>
                    <button onClick={() => this.nextPhase()} type="button" className="btn btn-outline-primary btn-secondary"><i
                            className="fa fa-step-forward" aria-label="forward" aria-hidden="true"></i></button>
                </div>

                <section className="buttonContainer">
                    <Button variant="primary" disabled={this.state.enable} onClick={()=> this.buttonClicked("enable")}>
                        Enable Voting
                    </Button>
                    <Button variant="primary" disabled={this.state.disable} onClick={()=> this.buttonClicked("disable")}>
                        Disable Voting
                    </Button>
                    <Button variant="primary" disabled={this.state.winner} onClick={()=> this.buttonClicked("winner")}>
                        Display Winner
                    </Button>
                </section>
            </div>
        )
    }

    /**
     * moves to the next phase of debate by updating the game state.
     * if already on last phase, does nothing.
     */
    nextPhase() {
        // update the game to have a currentPhase of currentPhase + 1
        if (this.props.phases[this.props.phaseIndex + 1]) { 
            let newPhase = this.props.phaseIndex + 1;
            this.props.updateGame("currentPhase", newPhase);
            this.props.updateGame("timeLeft", this.props.phases[newPhase].seconds);
        } else {
            // do nothing. edge case: we are already at the last phase
        }

        // shouldn't run ever, but this is a sanity check in case the currentPhase
        // ends up being bigger than the length of Phases
        if (this.props.phaseIndex > this.props.phases.length - 1) {
            this.props.updateGame("currentPhase", this.props.phases.length - 1);
        }
    }

    /**
     * moves to the previous phase of the debate
     */
    prevPhase() {
        if (this.props.phaseIndex > 0) {
            // update the game to have a currentPhase of currentPhase - 1
            // update timeLeft
            let newPhase = this.props.phaseIndex - 1;
            this.props.updateGame("currentPhase", newPhase);
            this.props.updateGame("timeLeft", this.props.phases[newPhase].seconds);
        } else {
            // set timeLeft to be this.props.phases[0].seconds
            this.props.updateGame("timeLeft", this.props.phases[0].seconds);
        }
    }
}

export default Controls;