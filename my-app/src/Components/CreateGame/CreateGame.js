import React from 'react';
import { InputTopic } from './InputTopic.js';
import { InputPlayers } from './InputPlayers.js';
import { TopicModal } from './TopicModal.js';
import { Link } from 'react-router-dom';
import '../../css/create-game.css';
import Footer from '../Footer.js';

class CreateGame extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <InputTopic onInput={this.props.updateGame}/>
                <InputPlayers onInput={this.props.updateGame}/>
                <section class="container">
                    <div class="text-center">
                        <Link to="/game"><button id="btn-start" class="btn btn-primary btn-lg mt-2 mx-auto">Begin Debate</button></Link>
                    </div>
                </section>
                {/* <TopicModal/> */}
            </div>
        )
    }
}

export default CreateGame;