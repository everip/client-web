import React, { Component } from 'react';

import './style.css';

export default class Map extends Component {
    render = () => {
        const {
            country,
            city,
            sight
        } = this.props;

        return (
            <>
                <iframe
                    title={`google map`}
                    src={`https://maps.google.com/maps?q=${sight},${city}+${country}&output=embed`}
                />
            </>
        );
    }
}