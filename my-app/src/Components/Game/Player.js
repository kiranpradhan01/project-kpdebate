import React from 'react';

class Player extends React.Component {
    render() {
        return (
            <section id="player-container" class="container">
                <div class="row">
                    <div class="col">
                        <h1 id="player-1">Patrin</h1>
                        <h2>is arguing Pro</h2>
                    </div>

                    <div class="col">
                        <h1 id="player-2">Kiran</h1>
                        <h2>is arguing Con</h2>
                    </div>
                </div>
                <div class="row">
                    <h3 id="topic" class="font-weight-bold mb-0"><br/>Pass topic through props here</h3>
                </div>
            </section>
    )}
}

export default Player;