import React, { Component } from 'react';
import Mock_PlayerListService from '../../Services/Mock_PlayerListService';
import Player from '../../Models/Player';
import PlayerIndex from './PlayerIndexButton';
import './List.css';

interface Props {
    handlePlayerClick(input: string): void;
}

interface State {
    currentPlayer: string
}

export default class PlayerCollection extends Component<Props, State> {

    constructor(props:Props){
        super(props);
        this.state = {currentPlayer:"Not selected"};
    }

    GeneratePlayerList = () => {

        let playerList = Mock_PlayerListService.GetMockData();

        let elements = playerList.map((x) => {
            return <PlayerIndex playerName={x._Name} indexClicked={this.props.handlePlayerClick}/>
        })

        return elements;
    }

    HandleClick = () => {
        this.props.handlePlayerClick("Connor");
    }

    render() {
        return (
            <div>
                {this.GeneratePlayerList()}
                <button onClick={this.HandleClick}>Click to change player</button>
            </div>
        )
    }
}
