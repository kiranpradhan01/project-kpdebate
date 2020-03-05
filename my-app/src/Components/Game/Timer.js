import React from 'react';

class Timer extends React.Component {

    render() {
        return (
        <section class="container">
            <div class="timer col-md-6">
                <div id="timer-card" class="card bg-light ">
                    <h3 class="card-title text-center">
                        <div class="d-flex flex-wrap justify-content-center mt-2">
                            <p id="timer-label">Patrin's Opening Statement</p>
                            <p id="timer"class="mb-0">5:00</p>
                        </div>
                    </h3>
                </div>

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
            </div>
        </section> 
        )
    }
}

export default Timer;
