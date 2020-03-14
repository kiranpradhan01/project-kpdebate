import React from 'react';

class Controls extends React.Component {
    render() {
        return (
            <div class="text-center">
                <div class="btn-group btn-group-lg" role="group" aria-label="">
                    <button type="button" class="btn btn-outline-primary btn-secondary"><i
                            class="fa fa-step-forward fa-flip-horizontal" aria-label="backward"
                            aria-hidden="true"></i></button>
                    <button type="button" class="btn btn-outline-primary btn-secondary middle-btn"><i
                            class="fa fa-pause" aria-label="pause" aria-hidden="true"></i></button>
                    <button type="button" class="btn btn-outline-primary btn-secondary"><i
                            class="fa fa-step-forward" aria-label="forward" aria-hidden="true"></i></button>
                </div>
            </div>
        )
    }
}

export default Controls;