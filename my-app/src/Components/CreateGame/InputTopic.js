import React from 'react';
import '../../css/create-game.css'
import GetTopicModal from './GetTopicModal.js';


export class InputTopic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            closeAll: false
            // has no knowledge of nested modal
        }
    }

    showModal = () => {
        this.setState({modal: true})
    }

    closeModal = () => {
        this.setState({modal: false})
    }

    render(){
        return (
            <section id="topic" class="createGameFirst createGameContainer">
            <div class="card createGameCard">
                <div class="card-body">
                    <h4 class="card-title">Topic</h4>
                        <div class="mx-3">
                            <div class="row">
                                <form class="col-sm-8 col-md-6 mx-auto">
                                    <input id="input-topic" class="w-100" type="text" placeholder="Enter a debate topic..." onChange={(event, value) => this.props.onInput("topic", event.target.value)}/>
                                </form>
                            </div>
                        <div class="row">
                            <button id="open-modal" class="btn btn-dark mt-2 ml-auto" data-toggle="modal" data-target="#modalRandomize" onClick={()=> {this.showModal()}}>Randomize!</button>
                        </div>
                    </div>
                </div>
                <GetTopicModal show={this.state.modal} handleClose={this.closeModal}/>
            </div>
            </section>
        )
    }
} 