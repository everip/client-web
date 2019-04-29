import React, { Component } from 'react';

import { Values, Weathers } from '../../../libs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

import { WeatherService } from '../../../actions';

export default class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weather: {},
            temperature: {},
            wind: {},
            humidity: '',
        };
    }

    componentDidMount() {
        const {
            country,
            city,
        } = this.props;

        WeatherService.SEARCH({ country, city })
            .then(({ data }) => {
                this.setState({
                    weather: {
                        icon: Weathers.format(data.weather[0].main),
                        text: data.weather[0].description,
                    },
                    temperature: {
                        current: Weathers.fromKelvinsToCelsius(data.main.temp),
                        max: Weathers.fromKelvinsToCelsius(data.main.temp_max),
                        min: Weathers.fromKelvinsToCelsius(data.main.temp_min),
                    },
                    wind: {
                        way: Weathers.formatByCardinal(data.wind.deg),
                        speed: data.wind.speed
                    },
                    humidity: data.main.humidity,
                })
            })
    }

    render = () => {
        const {
            className
        } = this.props;

        const {
            weather,
            temperature,
            wind,
            humidity,
        } = this.state;

        return (
            <>
                <div className={`weather ${Values.valuabled(className)}`}>
                    <div className={`icon ${weather.icon}`}>
                    </div>
                    <div className={`content`}>
                        <div className={`temperature`}>
                            <div>{temperature.current}℃</div>
                            <div>
                                <span className={`max`}><FontAwesomeIcon icon={`caret-up`} />{temperature.max}℃</span>
                                <span className={`min`}><FontAwesomeIcon icon={`caret-down`} />{temperature.min}℃</span>
                            </div>
                        </div>
                        <div className={`wind-humidity`}>
                            <div className={`wind`}>
                                <FontAwesomeIcon icon={`wind`} />
                                <span>{wind.way} {wind.speed}m/s</span>
                            </div>
                            <div className={`humidity`}>
                                <FontAwesomeIcon icon={`tint`} />
                                <span>{humidity}%</span>
                            </div>
                        </div>
                        <div className={`text`}>{weather.text}</div>
                    </div>
                </div>
            </>
        );
    }
}