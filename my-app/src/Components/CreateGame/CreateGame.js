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
        // generate and lift up random sessionID
        let sessionID = Math.floor(1000 + Math.random() * 9000);
        let existingSesssions = firebase.database().ref('sessions');
        existingSesssions.on('value', (snapshot) => {
            let sesh = snapshot.val();
            let ids = Object.keys(sesh);
            while (ids.includes(sessionID)) {
                sessionID = Math.floor(1000 + Math.random() * 9000);
            }
            console.log(sesh);
        })
        this.props.updateGame("sessionID", sessionID);
        this.sessionRef = firebase.database().ref('sessions/' + sessionID);
    }

    onChange = (key, value) => {
        this.setState({ [key]: value });
        this.props.updateGame(key, value);
    }

    updateFirebase = () => {
        this.sessionRef.set(
            this.state
            // "topic": this.state.topic,
            // "player1": this.state.player1,
            // "player2": this.state.player2,
            // votes: 0
        );
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