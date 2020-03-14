import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../../css/create-game.css';

class GetTopicModal extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        data: this.props.data,
        nestedModal: false,
        category: 'Anything'
      }
      console.log(this.props.randomTopics);
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
                <Button variant="secondary" onClick={this.props.handleClose}>
                    Is Adidas better than Nike?
                </Button>
                <p class="my-2">OR</p>
                <Button variant="secondary" onClick={this.props.handleClose}>
                  Is cereal a soup?
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
      // <div class="modal fade" id="modalRandomize" tabindex="-1" role="dialog" aria-hidden="true">
      //   <div class="modal-dialog modal-dialog-centered" role="document">
      //     <div class="modal-content">
      //       <div id="modal-categ-screen">
      //         {/*<!-- Section 4A: Category Screen -->*/}
      //         <div class="modal-header">
      //           <h5 class="modal-title" id="modalRandomizeLabel">Get random topic</h5>
      //           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      //             <span aria-hidden="true">&times;</span>
      //           </button>
      //         </div>
      //         <div class="modal-body text-center">
      //           <p>Select a general category for your topic choices.</p>
      //           <select class="browser-default custom-select w-50">
      //             <option value="Anything" selected>Anything</option>
      //           </select>
      //         </div>
      //         <div class="modal-footer">
      //           <button id="btn-get-topic" type="button" class="btn btn-primary">Get topics</button>
      //         </div>
      //       </div>
      //       <div id="modal-choice-screen" class="d-none">
      //         {/*<!-- Section 4B: Choice Screen -->*/}
      //         <div class="modal-header">
      //           <h5 class="modal-title" id="modal-choice-label">Debate about:</h5>
      //           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      //             <span aria-hidden="true">&times;</span>
      //           </button>
      //         </div>
      //         <div class="modal-body text-center">
      //           <button id="btn-choice-1" class="btn btn-secondary mx-auto" data-dismiss="modal">Is Adidas better than
      //             Nike?</button>
      //           <p class="my-2">OR</p>
      //           <button id="btn-choice-2" class="btn btn-secondary mx-auto" data-dismiss="modal">Is cereal a soup?</button>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>

export default GetTopicModal;