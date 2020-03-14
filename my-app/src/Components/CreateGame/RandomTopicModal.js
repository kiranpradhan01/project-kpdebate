import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../../css/create-game.css';

class RandomTopicModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} centered>
        <Modal.Header >
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

export default RandomTopicModal;