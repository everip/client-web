import React, { Component } from 'react';

import Images from '../../../assets/img';

import './style.css';

export default class Header extends Component {
    render = () => {
        return (
            <header className={`header ${this.props.way}`}>
                <div className={`header-logo`}>
                    EVERIP
                </div>
                <div className={`header-links`}>
                    <img src={Images.Email.path} alt={Images.Email.name} />
                    <img src={Images.Git.path} alt={Images.Git.name} />
                </div>
            </header>
        );
    }
}