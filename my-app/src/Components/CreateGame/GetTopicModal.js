import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../../css/create-game.css';

class GetTopicModal extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 
        nestedModal: false,
        category: "Anything"
      }
  }

  onCategorySelected = (event, value) => {
    this.setState({category: event.target.value});
    this.props.onCategorySelection(event, value);
  }

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Get random topics</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Select a general category for your topic choices.</p>
            <select class="browser-default custom-select w-50" value={this.state.category} onChange={this.onCategorySelected}>
              <option value="Anything">Anything</option>
              {this.props.options}
            </select>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => {this.setState({nestedModal: true})}}>
              Get Topics
            </Button>
            <Modal show={this.state.nestedModal} onHide={() => {this.setState({nestedModal: false})}} centered>
            <Modal.Header closeButton>
              <Modal.Title>Debate about:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button variant="secondary" onClick={() => this.props.handleClose(this.props.topic1)}>
                  {this.props.topic1}
                </Button>
                <p class="my-2">OR</p>
                <Button variant="secondary" onClick={() => this.props.handleClose(this.props.topic2)}>
                  {this.props.topic2}
                </Button>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default GetTopicModal;