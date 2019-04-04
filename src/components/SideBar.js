import React, { Component } from 'react';

import '../assets/css/components/sidebar.css';

export default class SideBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toggle: false
        }
    }

    handleToggle = () => {
        this.setState((prev) => ({
            toggle: !prev.toggle
        }));
    }

    render = () => {
        const {
            toggle
        } = this.state;

        return (
            <div className={`sidebar ${toggle}`}>
                <div
                    className={`sidebar-toggle`}
                    onClick={this.handleToggle}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className='sidebar-container'>
                    <ol>
                        <li>About</li>
                        <li>About</li>
                        <li>About</li>
                        <li>About</li>
                        <li>About</li>
                    </ol>
                </div>
            </div>
        );
    }
}