import React from 'react';
import AudienceJoin from './AudienceJoin.js';
import Scoreboard from './Scoreboard.js';
import Timer from './Timer.js';
import Controls from './Controls';
import '../../css/game.css';

class AdminGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <div>
                {/* <Scoreboard/>
                <Timer/>
                <Controls onClick={this.props.updateGame}/>
                <AudienceJoin/> */}
            </div>
        );
    }
}

export default AdminGame;