import React, { Component } from 'react';

import { Values } from '../../../libs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

export default class Weather extends Component {
    render = () => {
        const {
            weather,
            className,
        } = this.props;

        return (
            <>
                <div className={`weather ${Values.valuabled(className)}`}>
                    {
                        weather && 
                        <>
                            <div className={`icon ${weather.icon}`}></div>
                            <div className={`content`}>
                                <div className={`temperature`}>
                                    <div>{weather.temperature.now}℃</div>
                                    <div>
                                        <span className={`max`}><FontAwesomeIcon icon={`caret-up`} />{weather.temperature.max}℃</span>
                                        <span className={`min`}><FontAwesomeIcon icon={`caret-down`} />{weather.temperature.min}℃</span>
                                    </div>
                                </div>
                                <div className={`wind-humidity`}>
                                    <div className={`wind`}>
                                        <FontAwesomeIcon icon={`wind`} />
                                        <span>{weather.wind.way} {weather.wind.speed}m/s</span>
                                    </div>
                                    <div className={`humidity`}>
                                        <FontAwesomeIcon icon={`tint`} />
                                        <span>{weather.humidity}%</span>
                                    </div>
                                </div>
                                <div className={`text`}>{weather.text}</div>
                            </div>
                        </>
                    }
                </div>
            </>
        );
    }
}