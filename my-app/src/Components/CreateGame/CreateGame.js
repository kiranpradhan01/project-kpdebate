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
            topic: "",
            player1: "",
            player2: ""
        }
        let sessionsRef = firebase.database().ref('sessions');
        // generate and lift up random sessionID
        /* TODO: check if randomID is not so random and already exists in firebase */
        let existingSesssions = firebase.database().ref('sessions');
        existingSesssions.on('value', (snapshot) => {
            
        })

        let sessionID = Math.floor(1000 + Math.random() * 9000);
        this.props.updateGame("sessionID", sessionID);
        this.sessionRef = firebase.database().ref('sessions/' + sessionID);
    }

    onChange = (key, value) => {
        this.setState({ [key]: value });
        this.props.updateGame(key, value);
    }

    updateFirebase = () => {
        this.sessionRef.set({
            "topic": this.state.topic,
            "player1": this.state.player1,
            "player2": this.state.player2
        });
        console.log("updated firebase");
    }

    render() {
        return(
            <div className="w-70 mx-auto">
                <InputTopic onInput={this.onChange}/>
                <InputPlayers onInput={this.onChange}/>
                <section class="createGameContainer">
                    <div class="text-center">
                        <Link to="/admin-game"><button id="btn-start" class="btn btn-primary btn-lg mt-2 mx-auto" disabled={this.state.topic === "" || this.state.player1 === "" || this.state.player2 === ""}
                        onClick={this.updateFirebase}>Begin Debate</button></Link>
                    </div>
                </section>
            </div>
        )
    }
}

export default CreateGame;