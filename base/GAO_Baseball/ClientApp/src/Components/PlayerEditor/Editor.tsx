
import React, { Component } from 'react';

interface Props {
    playerName?:string
}

interface State {
}

export default class Editor extends Component<Props, State> {

    render() {
        return (
            <div>Player Edit {this.props.playerName}</div>
        )
    }
}