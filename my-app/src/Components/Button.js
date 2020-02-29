import React from 'react';

export class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: this.props.text,
            style: this.props.style
        }
    }

    render() {
        return (
            <button class="btn btn-primary btn-lg" style={this.state.style}> {this.state.text} </button>
        )
    }
}