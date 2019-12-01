import React, { Component } from 'react';
import PlayerCollection from './Components/PlayerList/PlayerCollection'
import './base.css';

interface Props {
}

interface State {
}

export default class MainLayout extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
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
                        <PlayerCollection />
                    </div>
                    <div className="GridRightSidePane">
                        Header
                    </div>
                </div>
            </div>
        );
    }
}