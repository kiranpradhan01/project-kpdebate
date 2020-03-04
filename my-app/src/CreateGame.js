import React from 'react';
import { InputTopic } from './Components/CreateGame/InputTopic.js';
import { InputPlayers } from './Components/CreateGame/InputPlayers.js';

class CreateGame extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <InputTopic/>
                <InputPlayers/>
                <section class="container">
                    <div class="text-center">
                        <button id="btn-start" class="btn btn-primary btn-lg mt-2 mx-auto">Begin Debate</button>
                    </div>
                </section>
            </div>
        )
    }
}

export default CreateGame;