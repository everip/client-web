import React, { Component } from 'react';

import { Values } from '../../../libs';

import './style.css';

export default class List extends Component {
    render = () => {
        const {
            data,
            className
        } = this.props;

        return (
            <>
                <ol className={`list ${Values.valuabled(className)}`}>
                    {
                        data && data.map((datum, index) => {
                            const {
                                icon,
                                text,
                                click
                            } = datum;

                            return (
                                <li
                                    className={`item`}
                                    key={index}
                                    onClick={click}
                                >
                                    <div className={`icon ${icon}`}></div>
                                    <div className={`text`}>{text}</div>
                                </li>
                            );
                        })
                    }
                </ol>
            </>
        );
    }
}