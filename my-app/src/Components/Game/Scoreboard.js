import React from 'react';
import '../../css/game.css';

/**
 * displays the topic, the names of the players, and their stance on the argument
 * @prop {string} player1 - name of the first player
 * @prop {string} player2 - name of the second player
 * @prop {string} topic - the argument being debated
 */
class Scoreboard extends React.Component {
    render() {
        return (
            <section className="first gameContainer">
                {/* Row with names */}
                <div className="row">
                    <div className="col">
                        <h1 id="player-1">{this.props.player1}</h1>
                        <h2>is arguing Pro</h2>
                    </div>

                    <div className="col">
                        <h1 id="player-2">{this.props.player2}</h1>
                        <h2>is arguing Con</h2>
                    </div>
                </div>

                {/* Row with topic */}
                <div className="row">
                    <h3 id="topic" className="font-weight-bold mb-0">{this.props.topic}</h3>
                </div>
            </section>
        );
    }
}

export default Scoreboard;