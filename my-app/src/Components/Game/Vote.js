import React from 'react';

class Vote extends React.Component {
    render(){
        return (
        <section class="gameContainer">
            <div class="text-center">
                <button id="vote" class="btn btn-primary btn-lg mt-2 mx-auto" data-toggle="modal"
                    data-target="#modalVote" disabled={true}>Vote</button>
            </div>
        </section>
        )
    }
}

export default Vote;