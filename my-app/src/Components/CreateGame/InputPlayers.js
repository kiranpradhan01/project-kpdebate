import React from 'react';
import '../../css/create-game.css'

export class InputPlayers extends React.Component {
    render() {
        return (
            <section id="players" class="createGameContainer">
                <div class="card createGameCard">
                    <div class="card-body">
                        <h4 class="card-title">Players</h4>
                        <div class="mx-3">
                            <div class="row">
                                <form class="col-sm-8 col-md-6 mx-auto">
                                    <input id="input-player1" class="w-100" type="text" placeholder="Enter Player One......" onChange={(event, value) => this.props.onInput("player1", event.target.value)}/>
                                    <input id="input-player2" class="w-100" type="text" placeholder="Enter Player Two......" onChange={(event, value) => this.props.onInput("player2", event.target.value)}/>
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    
}