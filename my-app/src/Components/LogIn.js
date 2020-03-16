import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class LogIn extends React.Component {
    render() {
        return (
            <div>
                <h1>My App</h1>
                <p>Please sign in</p>
                <StyledFirebaseAuth uiConfig={this.props.uiConfig} firebaseAuth={this.props.fbAuth}/>
            </div>
        )
    }
}

export default LogIn;