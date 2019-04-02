import React, { Component } from 'react';

export default class Country extends Component {
    render = () => {
        return (
            <div>
                Country {this.props.match.params.index}
            </div>
        );
    }
}