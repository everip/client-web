import React, { Component } from 'react';

import '../../assets/css/pages/home/wrapper.css';

export default class Box extends Component {
    render = () => {
        const {
            boxes,
            left,
            center,
            right,
            set
        } = this.props;

        return (
            <div
                className={`home-wrapper ${set}`}
            >
                {
                    left &&
                    <div className={`left container`}>
                        {
                            set === 'left' &&
                            <div className={`boxes`}>
                                {boxes}
                            </div>
                        }
                        <div
                            className={`item`}
                            style={{
                                backgroundImage: `url(${left.path})`
                            }}
                        />
                    </div>
                }
                {
                    center &&
                    <div className={`center container`}>
                        {
                            set === `center` &&
                            <div className={`boxes`}>
                                {boxes}
                            </div>
                        }
                        <div
                            className={`item`}
                            style={{
                                backgroundImage: `url(${center.path})`
                            }}
                        />
                    </div>
                }
                {
                    right &&
                    <div className={`right container`}>
                        {
                            set === `right` &&
                            <div className={`boxes`}>
                                {boxes}
                            </div>
                        }
                        <div
                            className={`item`}
                            style={{
                                backgroundImage: `url(${right.path})`
                            }}
                        />
                    </div>
                }
                {
                    left === undefined && center === undefined && right === undefined &&
                    <div className={`boxes`}>
                        {boxes}
                    </div>
                }
            </div>
        );
    }
}