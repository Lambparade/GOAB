
import React, { Component } from 'react';
import './PlayerList.css';

interface Props {
    playerName:string;
    indexClicked(input: string):void;
}

export default class PlayerIndexButton extends Component<Props> {

    constructor(props: Props) {
        super(props);
        this.state = {playerName:""}
    }

    HandleClick = () => {
        this.props.indexClicked(this.props.playerName);
    }

    render() {
        return (
            <div>
                <button className="IndexButton" onClick={this.HandleClick}>{this.props.playerName}</button>
            </div>
        );
    }
}