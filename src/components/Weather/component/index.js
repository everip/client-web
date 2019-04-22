import React, { Component } from 'react';

import { Values } from '../../../libs';

import './style.css';

export default class Weather extends Component {
    render = () => {
        const {
            country,
            city,
            className
        } = this.props;

        console.log(country, city)

        // Dummy
        const weather = `cloud`;
        const temperature = `16`;
        const text = `대체로 흐림`;

        return (
            <>
                <div className={`weather ${Values.valuabled(className)}`}>
                    <div className={`icon ${weather}`}></div>
                    <div className={`content`}>
                        <div className={`temperature`}>{temperature}℃</div>
                        <div className={`text`}>{text}</div>
                    </div>
                </div>
            </>
        );
    }
}