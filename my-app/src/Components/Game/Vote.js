import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import firebase from 'firebase/app';

class Vote extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        disableVoting: this.props.disableVoting,
        voted: false
      }
      console.log(this.state)
  }

  componentDidMount() {
    let sessionRef = firebase.database().ref('sessions/' + this.props.code);
    sessionRef.on('value', (snapshot) => {
        let sesh = snapshot.val();
        this.setState({numVotes: sesh.votes})
        console.log(sesh.votes);
    })
  }

  // tally votes with onClick event- voted player 1? numVotes + 1
  //                               - voted player 2? numVotes - 1
  onClickPlayer1 = () => {
    // let sessionRef = firebase.database().ref('sessions').child(this.props.code);
    // sessionRef.set({
    //     votes: this.state.numVotes + 1
    // }).catch(err => console.log(err));
    this.setState({voted: true});
  }

  onClickPlayer2 = () => {
    // let sessionRef = firebase.database().ref('sessions').child(this.props.code);
    // sessionRef.set({
    //     votes: this.state.numVotes + 1
    // }).catch(err => console.log(err));
    this.setState({voted: true});
  }

  modalBody() {
      return (
        <div className="votingBody">
            <p>Who won the debate?</p>
            <div className="modal-vote-row row">
                <div className="col">
                <Button variant="secondary" onClick={this.onClickPlayer1()}>
                    Kiran
                </Button>
                </div>
                <div className="col">
                    <p className="my-2">OR</p>
                </div>
                <div className="col">
                <Button variant="secondary" onClick={this.onClickPlayer2()}>
                    Patrin
                </Button>
                </div>
            </div>
        </div>
      )
  }

  votingMessage() {
      return (
        <div className="votingMessage">
            <p>
                Hang tight as we tally the votes! <br/>
                Click anywhere to close this modal!
            </p>
        </div>
      )
  }

    render(){
        return (
        <section className="gameContainer">
            <div className="text-center">
                <Button variant="primary" size="lg" disabled={this.state.disableVoting} onClick={() => {this.setState({modal: true, disableVoting: true})}}>Vote</Button>
                <Modal show={this.state.modal} onHide={() => {this.setState({modal: false})}} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Final Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.voted ? this.votingMessage() : this.modalBody()}
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                </Modal>
            </div>
        </section>
        )
    }
}

export default Vote;