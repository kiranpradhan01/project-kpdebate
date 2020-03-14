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
            </div>
        </section> 
        )
    }
}

export default Timer;
