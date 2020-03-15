import React from 'react';
import '../../css/game.css';

/**
 * controls the timer of the current round in the game.
 * @prop {object} timerObject - the object representing the timer.
 * @prop {number} timeLeft - number of seconds left in the round.
 * @prop {string} timerLabel - the message labeling the current phase
 * @prop {function} updateGame - the callback function used to update App's state
 */
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.startCountdown();
    }

    render() {
        let minutesLeft = this.convertToMinutes(this.props.timeLeft);
        return (
        <section className="gameContainer"> 
            <div className="timer col-md-6">
                <div id="timer-card" class="card timerCard bg-light">
                    <h3 className="card-title text-center">
                        <div className="d-flex flex-wrap justify-content-center mt-2">
                            <p id="timer-label">{this.props.timerLabel}</p>
                            <p id="timer" className="mb-0">{minutesLeft}</p>
                        </div>
                    </h3>
                </div>
            </div>
        </section> 
        );
    }

    /**
     * initializes a timer that updates the visual element of a timer very second.
     */
    startCountdown() {

        // set up the timer actor for a new countdown
        // TODO: remove className bg-yellow from timer-card

        let timerID = setInterval(this.everySecond, 1000);

        return timerID;
    }

    /**
     * the behavior of the timer for every second the timer ticks.
     */
    everySecond() {
        // let i = this.props.timeLeft;
        // if (i === 0) {
        //     // clear the timer
        //     clearInterval(this.props.timerObject); // ! Check on App.js whether the interval was cleared
        //     this.props.updateGame("timerObject", null); // ! test this
        //     // TODO: add className bg-yellow

        //     console.log(this.props.timerObject); 
        // } else {
        //     i--;
        //     this.props.updateGame("timeLeft", i);
        //     console.log("tick!");
        // }
    }

    /**
     * If seconds is greater than 60, returns it in a minutes-converted format.
     * Also, if seconds=0, converts the message to "Time's Up!"
     * @param {number} seconds - the number of seconds to be converted to minutes
     */
    convertToMinutes(seconds) {
        if (seconds === 0) {
            document.getElementById("timer-card").classList.add("bg-yellow"); // TODO: does this work
            return "Time's up!";
        } else {
            let min = Math.trunc(seconds / 60);
            let sec = seconds % 60; // number of seconds left in the current minute
            if (sec < 10) {
                sec = "0" + sec;
            }
            return min + ":" + sec;
        }
    }
}

export default Timer;
