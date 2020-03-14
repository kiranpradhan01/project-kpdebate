import React from 'react';
import AudienceJoin from './AudienceJoin.js';
import Player from './Player.js';
import Timer from './Timer.js';
import Controls from './Controls';
import '../../css/game.css';

class AdminGame extends React.Component {
    render() {
        return(
            <div>
                <Player/>
                <Timer/>
                <Controls/>
                <AudienceJoin/>
            </div>
        );
    }
}

export default AdminGame;