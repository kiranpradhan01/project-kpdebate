import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Vote extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false
      }
  }

    render(){
        return (
        <section className="gameContainer">
            <div className="text-center">
                <Button variant="primary" size="lg" onClick={() => {this.setState({modal: true})}}>Vote</Button>
                <Modal show={this.state.modal} onHide={() => {this.setState({modal: false})}} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Final Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Who won the debate?</p>
                        <div className="modal-vote-row row">
                        <div className="col">
                        <Button variant="secondary" onClick={() => {this.setState({modal: false})}}>
                            Kiran
                        </Button>
                        </div>
                        <div className="col">
                            <p className="my-2">OR</p>
                        </div>
                        <div className="col">
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