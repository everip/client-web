import React, { Component } from 'react';

import './style.css';

import { Values } from '../../../libs';

export default class Box extends Component {
    render = () => {
        const {
            left,
            right,
            full,
            className
        } = this.props;

        return (
            <>
                <div className={`box ${Values.valuabled(className)}`}>
                    {
                        full &&
                        <div className={`full ${Values.valuabled(full.className)}`}>
                            <div className={`middle`}>
                                <p className={`head`}>{full.head}</p>
                                <div className={`body`}>{full.body}</div>
                            </div>
                        </div>
                    }
                    {
                        left &&
                        <div className={`left ${(left.top && left.bottom) ? 'each' : ''} ${Values.valuabled(left.className)}`}>
                            {
                                left.top &&
                                <div className={`top ${Values.valuabled(left.top.className)}`}>
                                    <p className={`head`}>{left.top.head}</p>
                                    <div className={`body`}>{left.top.body}</div>
                                </div>
                            }
                            {
                                left.middle &&
                                <div className={`middle ${Values.valuabled(left.middle.className)}`}>
                                    <p className={`head`}>{left.middle.head}</p>
                                    <div className={`body`}>{left.middle.body}</div>
                                </div>
                            }
                            {
                                left.bottom &&
                                <div className={`bottom ${Values.valuabled(left.bottom.className)}`}>
                                    <p className={`head`}>{left.bottom.head}</p>
                                    <div className={`body`}>{left.bottom.body}</div>
                                </div>
                            }
                        </div>
                    }
                    {
                        right &&
                        <div className={`right ${(right.top && right.bottom) ? 'each' : ''} ${Values.valuabled(right.className)}`}>
                            {
                                right.top &&
                                <div className={`top ${Values.valuabled(right.top.className)}`}>
                                    <p className={`head`}>{right.top.head}</p>
                                    <div className={`body`}>{right.top.body}</div>
                                </div>
                            }
                            {
                                right.middle &&
                                <div className={`middle ${Values.valuabled(right.middle.className)}`}>
                                    <p className={`head`}>{right.middle.head}</p>
                                    <div className={`body`}>{right.middle.body}</div>
                                </div>
                            }
                            {
                                right.bottom &&
                                <div className={`bottom ${Values.valuabled(right.bottom.className)}`}>
                                    <p className={`head`}>{right.bottom.head}</p>
                                    <div className={`body`}>{right.bottom.body}</div>
                                </div>
                            }
                        </div>
                    }
                </div>
            </>
        );
    }
}