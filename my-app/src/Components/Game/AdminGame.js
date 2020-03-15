import React from 'react';
import AudienceJoin from './AudienceJoin.js';
import Timer from './Timer.js';
import Controls from './Controls';
import '../../css/game.css';

class AdminGame extends React.Component {
    render() {
        return(
            <div>
                <Timer/>
                <Controls/>
                <AudienceJoin/>
            </div>
        );
    }
}

export default AdminGame;