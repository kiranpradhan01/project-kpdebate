import React from 'react';
import { InputTopic } from './InputTopic.js';
import { InputPlayers } from './InputPlayers.js';
import { Link } from 'react-router-dom';
import '../../css/create-game.css';

class CreateGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: false,
            player1: false,
            player2: false
        }
    }
    
    onChange = (key, value) => {
        if (value !== "") {
            this.setState({
                [key]: true // update state to toggle button disabled
            });
        } else {
            this.setState({
                [key]: false // update state to toggle button disabled
            });
        }
        this.props.updateGame(key, value);
    }

    render() {
        return(
            <div>
                <InputTopic onInput={this.onChange}/>
                <InputPlayers onInput={this.onChange}/>
                <section class="createGameContainer">
                    <div class="text-center">
                        <Link to="/admin-game"><button id="btn-start" class="btn btn-primary btn-lg mt-2 mx-auto" disabled={this.state.topic === false || this.state.player1 === false || this.state.player2 === false}>Begin Debate</button></Link>
                    </div>
                </section>
            </div>
        )
    }
}

export default CreateGame;