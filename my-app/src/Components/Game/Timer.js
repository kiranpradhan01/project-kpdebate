import React from 'react';
import '../../css/game.css';

/**
 * controls the timer of the current round in the game.
 * @prop {string} sessionID - the ID of the session being accessed
 * @prop {object} timerObject - the object representing the timer.
 * @prop {number} timeLeft - number of seconds left in the round.
 * @prop {number} phaseIndex - the current phase of the debate.
 * @prop {object} phases - const object of the phases of the debate.
 * @prop {boolean} isAdminTimer - determines whether this timer is in Admin Game.
 * @prop {function} updateGame - the callback function used to update App's state
 */
class Timer extends React.Component {
    constructor(props) {
        super(props);
        // this.sessionRef = firebase.database().ref('sessions/' + this.props.sessionID);
        this.startCountdown();
    }

    render() {
        let minutesLeft = this.convertToMinutes(this.props.timeLeft);
        return (
        <section className="gameContainer"> 
            <div className="timer col-md-6">
                <div id="timer-card" className={"card timerCard " + this.isBackgroundYellow()}>
                    <h3 className="card-title text-center">
                        <div className="col mt-2">
                            <p id="timer-label">{this.getPhaseName()}</p>
                            <p id="timer" className="mb-0">{minutesLeft}</p>
                        </div>
                    </h3>
                </div>
            </div>
        </section> 
        );
    }

    /**
     * returns a suitable name for the current Phase.
     * format: "CURRENT_SPEAKER - CURRENT PHASE"
     */
    getPhaseName() {
        let currentPhase = this.props.phases[this.props.phaseIndex];
        if (currentPhase.title === "Voting") {
            return "Time to Vote!";
        }

        let outputString = (currentPhase.speaker === 1 ? this.props.player1 : this.props.player2);
        outputString += " - " + currentPhase.title;
        return outputString;
    }

    /**
     * initializes a timer that updates the visual element of a timer very second.
     */
    startCountdown() {
        return setInterval(() => this.everySecond(this.props.timeLeft), 1000);
    }

    /**
     * the behavior of the timer for every second the timer ticks.
     */
    everySecond(timeLeft) {
        let i = timeLeft;
        if (i === 0 && this.props.isAdminTimer) {
            clearInterval(this.props.timerObject); // clear the timer
            this.props.updateGame("timerObject", null);
        } else if (this.props.isAdminTimer){
            i--;
            this.props.updateGame("timeLeft", i);
        }
    }

    /**
     * If seconds is greater than 60, returns it in a minutes-converted format.
     * Also, if seconds=0, converts the message to "Time's Up!"
     * @param {number} seconds - the number of seconds to be converted to minutes
     */
    convertToMinutes(seconds) {
        if (seconds === 0) {
            if (this.props.phases[this.props.phaseIndex].title !== "Voting") {
                return "Time's up!";
            } else {
                return "";
            }
        } else {
            let min = Math.trunc(seconds / 60);
            let sec = seconds % 60; // number of seconds left in the current minute
            if (sec < 10) {
                sec = "0" + sec;
            }
            return min + ":" + sec;
        }
    }

    /**
     * defines the color of the timer depending on how much time is left.
     * The timer turns yellow when time runs out.
     */
    isBackgroundYellow() {
        return (this.props.timeLeft === 0) ? "bg-yellow" : "bg-light";
    }
}

export default Timer;
