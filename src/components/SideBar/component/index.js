import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default class SideBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toggle: false
        }
    }

    componentWillReceiveProps = () => {
        this.setState((prev) => ({
            toggle: prev.toggle && this.props.way === `down`
        }));
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
            <div className={`sidebar ${toggle} ${this.props.way}`}>
                <div
                    className={`sidebar-toggle`}
                    onClick={this.handleToggle}
                >
                    <span className={`bar`}></span>
                    <span className={`bar`}></span>
                    <span className={`bar`}></span>
                </div>
                <div className={`sidebar-container`}>
                    <ol>
                        <li><Link to="/" onClick={this.handleToggle}>HOME</Link></li>
                        <li><Link to="/JAPAN" onClick={this.handleToggle}>COUNTRY</Link></li>
                    </ol>
                </div>
            </div>
        );
    }
}