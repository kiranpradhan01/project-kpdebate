import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import '../../css/game.css';

class WinnerModal extends React.Component {
    render() {
        return(
            <Modal show={this.props.show} onHide={!this.props.show} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{"Congrats " + this.props.winner + "!"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="winnerBody">
                        <img className="winner-img" src={require("../../img/winners.svg")} alt="2 people with a golden trophy" />
                    </div>
                    <br></br>
                    We hope you learned lots during this debate and hope you bring the spirit of debate with you as you go about your daily lives!
                </Modal.Body>
                <Modal.Footer>Return to <Link to="/">Home</Link></Modal.Footer>
            </Modal>
        )
    }
}

export default WinnerModal;