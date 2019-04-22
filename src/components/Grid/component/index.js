import React, { Component } from 'react';

import { Card } from '../../';

import { Values } from '../../../libs';

import './style.css';

export default class Grid extends Component {
    render = () => {
        const {
            data,
            className
        } = this.props;

        return (
            <>
                <div
                    className={`grid ${Values.valuabled(className)}`}
                >
                    {
                        data && data.map((datum, index) => {
                            const {
                                head,
                                body,
                                to,
                                click,
                                custom,
                            } = datum;

                            return (
                                <Card
                                    head={head}
                                    body={body}
                                    to={to}
                                    click={click}
                                    custom={custom}
                                    key={index}
                                />
                            );
                        })
                    }
                </div>
            </>
        );
    }
}