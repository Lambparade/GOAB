import React, { Component } from 'react';
import PlayerCollection from './Components/PlayerList/PlayerCollection'
import Editor from './Components/PlayerEditor/Editor'
import './base.css';

interface Props {
}

interface State {
    currentPlayer:string;
}

export default class MainLayout extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {currentPlayer:"Not connot :("}
    }

    PlayerClicked = (input:string) => {
        this.setState({currentPlayer:input})
    }

    hey: string = 'dog';

    render() {
        return (
            <div>
                <div className='GridLayout'>
                    <div className="GridHeader">
                        The Golden Age of Baseball Repository
                    </div>
                    <div className="GridLeftSidePane">
                        <PlayerCollection handlePlayerClick={this.PlayerClicked} />
                    </div>
                    <div className="GridRightSidePane">
                        <Editor playerName={this.state.currentPlayer}/>
                        Header
                    </div>
                </div>
            </div>
        );
    }
}