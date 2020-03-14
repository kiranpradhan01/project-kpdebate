import React from 'react';
import history from '../../history.js';
import { Link } from 'react-router-dom';


/**
 * renders the title of the Home page.
 * No props.
 * onClick={() => history.push('/create-game')}
 */
class TitleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      disabled: true
    }
  }

  handleInput = (event) => {
    let buttonDisabled = (this.state.sessionID !== null || this.state.sessionID.length < 4);
    let stateChanges = {
      disabled: buttonDisabled
    };
    this.setState(stateChanges);
    console.log(this.state.sessionID);
  }

  render() {
    return(
      <div id="title-card" className="container">
        <div className="text-center">
          {/* Header */}
          <header>
            <h1 className="display-1 font-weight-bold">DebateNOW</h1>
            <p className="lead subtitle font-weight-bold">A simple game where you argue about stuff</p>
            <hr className="my-4" />
          </header>

          {/* Game options */}
          <div className="row">
            {/* Flavor img */}
            <div className="col">
              <div className="d-flex justify-content-center">
                <img id="left-img" className="img-title" src={require("../../img/index-man.svg")} alt="a man" />
              </div>
            </div>

            {/* New game / Join Game */}
            <div className="col text-center">
              <div className="d-flex justify-content-center align-items-center">
                <form className="mb-2 mr-sm-2">
                  <input id="session-name" className="border border-secondary" type="text"
                    placeholder="Enter Game Code" maxLength={4} onChange={(event, value) => this.props.onInput("sessionID", event.target.value)}/>
                </form>
                <Link to="/game"><button id="btn-join" className="btn btn-primary btn-md join" href="game.html" role="button" disabled={this.state.disabled}>Join!</button></Link>
              </div>
              <h2 className="lead my-4">OR</h2>
              <Link to="/create-game"><a className="btn btn-primary btn-lg create" href="create-game.html" role="button">Create New Game</a></Link>
              
            </div>

            {/* Flavor img */}
            <div className="col">
              <div className="d-flex justify-content-center">
                <img className="img-title" src={require("../../img/index-woman.svg")} alt="a woman" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleCard;