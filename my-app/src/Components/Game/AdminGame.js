import React from 'react';
import AudienceJoin from './AudienceJoin.js';
import Scoreboard from './Scoreboard.js';
import Timer from './Timer.js';
import Controls from './Controls';
import '../../css/game.css';

class AdminGame extends React.Component {
    render() {
        return(
            <div>
                <Scoreboard/>
                <Timer/>
                <Controls/>
                <AudienceJoin/>
            </div>
        );
    }
}

export default AdminGame;