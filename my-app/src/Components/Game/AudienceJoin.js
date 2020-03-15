import React from 'react';

class AudienceJoin extends React.Component {
    render() {
        console.log("session ID is " + this.props.code);
        return(
            <section class="container">
                <div>
                    <p>
                        Invite audience members to join this debate at<a href="kpdebate.com">kpdebate.com</a> with game
                        code<span class="code">{this.props.code}</span>
                    </p>
                </div>
            </section>
        )
    }
}

export default AudienceJoin;