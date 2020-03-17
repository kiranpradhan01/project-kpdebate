import React from 'react';
import { InputTopic } from './InputTopic.js';
import { InputPlayers } from './InputPlayers.js';
import LogIn from '../../Components/LogIn.js';
import { Link } from 'react-router-dom';
import '../../css/create-game.css';
import firebase from 'firebase/app';

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
            if (snapshot.exists()) {
                let sesh = snapshot.val();
                let ids = Object.keys(sesh);
                while (ids.includes(sessionID)) { // to avoid duplicate ids
                    sessionID = Math.floor(1000 + Math.random() * 9000);
                }
            }
        })
        this.props.updateGame("sessionID", sessionID);
        this.sessionRef = firebase.database().ref('sessions/' + sessionID);
    }

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => {
                this.setState({
                    isSignedIn: !!user
                }, () => {
                    this.props.updateGame("isSignedIn", !!user)
                })
            }
        );
    }

    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    onChange = (key, value) => {
        this.setState({ [key]: value });
        this.props.updateGame(key, value);
    }

    render() {
        // must sign in to host a debate
        if (!this.state.isSignedIn) {
            return (
                <LogIn uiConfig={this.props.uiConfig} fbAuth={firebase.auth()}/>
            );
        } else {
        return(
            <div className="w-70 mx-auto">
                <InputTopic 
                    onInput={this.onChange}
                />
                <InputPlayers onInput={this.onChange}/>
                <section class="createGameContainer">
                    <div class="text-center">
                        <Link to="/admin-game"><button id="btn-start" class="btn btn-primary btn-lg mt-2 mx-auto" disabled={this.state.topic === "" || this.state.player1 === "" || this.state.player2 === ""}>Begin Debate</button></Link>
                    </div>
                </section>
            </div>
        )
        }
    }
}

export default CreateGame;