import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class LogIn extends React.Component {
    render() {
        return (
            <div id="login">
                <h1>Please sign in</h1>
                <p>To host a Debate.</p>
                <StyledFirebaseAuth uiConfig={this.props.uiConfig} firebaseAuth={this.props.fbAuth}/>
            </div>
        )
    }
}

export default LogIn;