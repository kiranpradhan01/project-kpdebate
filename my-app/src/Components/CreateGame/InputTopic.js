import React from 'react';
import TopicModal from './TopicModal.js';
import Modal from './ModalExample.js';
import '../../css/create-game.css'

export class InputTopic extends React.Component {
    render(){
        return (
            <section id="topic" class="first container">
                <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Topic</h4>
                        <div class="mx-3">
                            <div class="row">
                                <form class="col-sm-8 col-md-6 mx-auto">
                                    <input id="input-topic" class="w-100" type="text" placeholder="Enter a debate topic..." onChange={(event, value) => this.props.onInput("topic", event.target.value)}/>
                                </form>
                            </div>
                        <div class="row">
                            <button id="open-modal" class="btn btn-dark mt-2 ml-auto" data-toggle="modal" data-target="#modalRandomize">Randomize!</button>
                        </div>
                    </div>
                </div>

                {/* <TopicModal /> */}
                <Modal onClose={console.log("close the modal")} show={true} children={null} />
            </div>
            </section>
        )
    }
} 