import React from 'react';

class AudienceJoin extends React.Component {
    render() {
        return(
            <section className="container">
                <div>
                    <p>
                        Invite audience members to join this debate at<a href="https://info340a-w20.github.io/project-kpdebate/">info340a-w20.github.io/project-kpdebate/</a>with game
                        code<span className="code"> {this.props.code}</span>
                    </p>
                </div>
            </section>
        )
    }
}

export default AudienceJoin;