import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Vote extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        disableVoting: this.props.disableVoting,
        voted: false
      }
  }

    render(){
        return (
        <section class="gameContainer">
            <div class="text-center">
                <Button variant="primary" size="lg" disabled={this.state.disableVoting} onClick={() => {this.setState({modal: true, voted: true, disableVoting: true})}}>Vote</Button>
                <Modal show={this.state.modal} onHide={() => {this.setState({modal: false})}} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Final Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Who won the debate?</p>
                        <div class="modal-vote-row row">
                        <div class="col">
                        <Button variant="secondary" onClick={() => {this.setState({modal: false})}}>
                            Kiran
                        </Button>
                        </div>
                        <div class="col">
                            <p class="my-2">OR</p>
                        </div>
                        <div class="col">
                        <Button variant="secondary" onClick={() => {this.setState({modal: false})}}>
                            Patrin
                        </Button>
                        </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                </Modal>
            </div>
        </section>
        )
    }
}

export default Vote;