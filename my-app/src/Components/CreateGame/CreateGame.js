import React from 'react';
import { InputTopic } from './InputTopic.js';
import { InputPlayers } from './InputPlayers.js';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import '../../css/create-game.css';

class CreateGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: false,
            player1: false,
            player2: false
        }
        let sessionsRef = firebase.database().ref('sessions');
        // generate and lift up random sessionID
        /* TODO: check if randomID is not so random and already exists in firebase */
        let sessionID = Math.floor(1000 + Math.random() * 9000);
        this.props.updateGame("sessionID", sessionID);
        this.sessionRef = firebase.database().ref('sessions/' + sessionID);
    }

    // firebase testing
    // 
    // let session = firebase.database().ref('sessions/2222');
    // session.set({"topic": "cats or dogs", "player1": "Kiran", "player2": "Patrin"});
    
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
        this.sessionRef.set({[key]: value});
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