import React from 'react';
import Button from 'react-bootstrap/Button';
import '../../css/game.css';

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
            this.props.onClick("enable", true); // enable audience voting
        } else if (key === "disable") {
            stateChanges = {
                "enable": false,
                "disable": true,
                "winner": false
            };
            this.props.onClick("enable", false); // disable audience voting
        } else {
            stateChanges = {
                "enable": true,
                "disable": true,
                "winner": true
            };
            this.props.onClick("enable", false); // disable audience voting
            this.props.onClick("displayWinner", true); // display winner to audience
        }
        this.setState(stateChanges);
    }

    render() {
        return (
            <div className="text-center"> 
                <div className="btn-group btn-group-lg" role="group" aria-label="">
                    <button type="button" className="btn btn-outline-primary btn-secondary"><i
                            className="fa fa-step-forward fa-flip-horizontal" aria-label="backward"
                            aria-hidden="true"></i></button>
                    <button onClick={this.nextPhase} type="button" className="btn btn-outline-primary btn-secondary"><i
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
     * moves on to the next phase of the debate
     */
    nextPhase() {
        console.log("next!");
    }

    /**
     * moves to the previous phase of the debate
     */
    prevPhase() {
        console.log("previous!");
    }
}

export default Controls;