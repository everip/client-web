import React, { Component } from 'react';

import './style.css';

export default class Box extends Component {
    render = () => {
        return (
            <div className={`home-box`}>
                <div className={`icon`}>
                    <img src={this.props.icon.path} alt={this.props.icon.name} />
                </div>
                <div className={`content`}>
                    <div className={`head`}>{this.props.content.head}</div>
                    <div className={`body`}>{this.props.content.body}</div>
                </div>
            </div>
        );
    }
}