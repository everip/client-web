import React, { Component } from 'react';

import { DateTime, Weather, Exchange } from '../../';

import { Values } from '../../../libs';

import './style.css';

export default class Information extends Component {
    render = () => {
        const {
            country,
            city,
            className
        } = this.props;

        console.log(country, city)

        // Dummy
        const monthRecommend = [4, 5, 6];
        const monthCurrent = new Date().getMonth() + 1;

        console.log(monthRecommend);

        return (
            <>
                <div className={`information ${Values.valuabled(className)}`}>
                    <div>
                        <DateTime country={country} city={city} />
                        <Weather country={country} city={city} />
                        <Exchange country={country} city={city} />
                    </div>
                    <div>
                        <div>
                            <div className={`comment`}>지금!!!</div>
                            {
                                [...Array(4).keys()].map((i) => {
                                    return (
                                        <div key={i}>
                                            {
                                                [...Array(3).keys()].map((j) => {
                                                    let month = (3 * i) + (j + 1);
                                                    let recommend = Values.valueable(monthRecommend.find(value => value === month));
                                                    let current = monthCurrent === month;
                                                    return (
                                                        <span
                                                            key={month}
                                                            className={`${recommend && 'recommend'} ${current && 'current'}`}
                                                        >
                                                            {month}
                                                        </span>
                                                    );
                                                })
                                            }
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
}