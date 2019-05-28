import React, { Component } from 'react';

import { Values } from '../../../libs';

import './style.css';

export default class DateTime extends Component {
    render = () => {
        const {
            className
        } = this.props;

        // new Date(1556156214 * 1000)
        
        const date = `2019월 4월 29일`;
        const time = `오후 3시 20분`;

        return (
            <>
                <div className={`datetime ${Values.valuabled(className)}`}>
                    <div className={`date`}>{date}</div>
                    <div className={`time`}>{time}</div>
                </div>
            </>
        );
    }
}