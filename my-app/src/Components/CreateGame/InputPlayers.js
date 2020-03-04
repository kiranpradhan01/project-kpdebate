import React from 'react';

export class InputPlayers extends React.Component {
    render() {
        return (
            <section id="players" class="container">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Players</h4>
                        <div class="mx-3">
                            <div class="row">
                                <form class="col-sm-8 col-md-6 mx-auto">
                                    <input id="input-player1" class="w-100" type="text" placeholder="Enter Player One......"/>
                                    <input id="input-player2" class="w-100" type="text" placeholder="Enter Player Two......"/>
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    
}