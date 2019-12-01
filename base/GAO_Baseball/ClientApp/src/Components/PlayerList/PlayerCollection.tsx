import React, { Component } from 'react';
import Mock_PlayerListService from '../../Services/Mock_PlayerListService';
import './List.css';

interface Props {
}

interface State {
}

export default class PlayerCollection extends Component<Props, State> {

    GeneratePlayerList = () => {

        let playerList = Mock_PlayerListService.GetMockData();

        let elements = playerList.map((x) => {
            return <div className="Label">{x._Name}</div>
        })

        return elements;
    }

    render() {
        return (
            <div>{this.GeneratePlayerList()}</div>
        )
    }
}
