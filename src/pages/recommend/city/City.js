import React, { Component } from 'react';

export default class City extends Component {
    render = () => {
        return (
            <div>
                City {this.props.match.params.index}
            </div>
        );
    }
}