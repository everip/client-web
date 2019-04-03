import React, { Component } from 'react';

import Images from '../assets/img';

import '../assets/css/components/header.css';

export default class Header extends Component {
    render = () => {
        return (
            <header className='home-header'>
                <div className='header-logo'>
                    LOGO
                </div>
                <div className='header-links'>
                    <img src={Images.Email.path} alt={Images.Email.name} />
                    <img src={Images.Git.path} alt={Images.Git.name} />
                </div>
            </header>
        );
    }
}