import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import WinnerModal from './WinnerModal.js';
import firebase from 'firebase/app';

/**
 * @prop {string} sessionID - the ID of the session being accessed
 * @prop {number} votes - the current sum of votes toward the speakers.
 * @prop {string} player1 - name of the first player
 * @prop {string} player2 - name of the second player
 * @prop {boolean} disableVoting - determines whether the vote button should currently be disabled
 * @prop {boolean} displayWinner - determines whether the winner should be disclosed.
 */
class Vote extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        disableVoting: this.props.disableVoting,
        voted: false
      }
      console.log(this.state);
      console.log("votes: " + this.props.votes);
      // move to castVote when done testing
      // use once snapshot to get current vote #
  }

  /**
   * casts this particular audience member's vote.
   * the if/else wrapper in this function protects against people manually editing
   * the HTML to vote when voting is still disabled.
   * @param {string} votedPlayer - "player1" if the button to vote for player 1 was clicked. 
   */
  castVote (votedPlayer) {
    let tally = (votedPlayer === "player1" ? 1 : -1); // calculate who I voted for
    if (!this.disableVoting) {
        this.setState({voted: true}); // locks you out from voting again
        let sessionRef = firebase.database().ref('sessions/' + this.props.sessionID + '/');
        sessionRef.once('value', (snapshot) => {
            let currentVotes = snapshot.val().votes;
            console.log("votes in state: " + this.props.votes);
            console.log("firebase votes: " + currentVotes);
            sessionRef.update({votes: currentVotes + tally});
        });
    }
  }

  componentDidMount() {
    let sessionRef = firebase.database().ref('sessions/' + this.props.sessionID);
    sessionRef.once('value', (snapshot) => {
        let sesh = snapshot.val();
        this.setState({numVotes: sesh.votes})
    })
  }

  // tally votes with onClick event- voted player 1? numVotes + 1
  //                               - voted player 2? numVotes - 1
  onClickPlayer1 = () => {
    // let sessionRef = firebase.database().ref('sessions').child(this.props.sessionID);
    // sessionRef.set({
    //     votes: this.state.numVotes + 1
    // }).catch(err => console.log(err));
    this.setState({voted: true});
  }

  onClickPlayer2 = () => {
    // let sessionRef = firebase.database().ref('sessions').child(this.props.sessionID);
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
                <Button variant="secondary" onClick={() => this.castVote("player1")}>
                    {this.props.player1}
                </Button>
                </div>
                <div className="col">
                    <p className="my-2">OR</p>
                </div>
                <div className="col">
                <Button variant="secondary" onClick={() => this.castVote("player2")}>
                {this.props.player2}
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
                    <Button variant="primary" size="lg" disabled={this.props.disableVoting} onClick={() => {this.setState({modal: true, disableVoting: true})}}>Vote</Button>
                    <Modal show={this.state.modal} onHide={() => {this.setState({modal: false})}} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Final Vote</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {this.state.voted ? this.votingMessage() : this.modalBody()}
                        </Modal.Body>
                        <Modal.Footer></Modal.Footer>
                    </Modal>
                    <WinnerModal show={this.props.displayWinner} winner={this.props.sessionID}/>
                </div>
            </section>
        )
    }
}

export default Vote;