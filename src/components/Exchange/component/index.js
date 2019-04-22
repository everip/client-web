import React, { Component } from 'react';

import { Values } from '../../../libs';

import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Exchange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            won: 10.13,
            currency: 1,
        }
        this.rate = 10.13;
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        let won = 0;
        let currency = 0;

        const parse = (value) => {

            return Number.parseFloat(value.toFixed(5));
        }

        switch (name) {
            case `won`:
                won = value;
                currency = parse(won / this.rate);
                break;
            case `currency`:
                currency = value;
                won = parse(currency * this.rate);
                break;
            default:
                console.error(`[Input Name Exception]`);
                break;
        }

        this.setState({
            'won': won,
            'currency': currency
        });
    }

    render = () => {
        const {
            country,
            city,
            className
        } = this.props;

        console.log(country, city);

        // Dummy
        const {
            won,
            currency,
        } = this.state;

        return (
            <>
                <div className={`exchange ${Values.valuabled(className)}`}>
                    <div className={`top`}>
                        <span className={`currency`}>
                            <input
                                type={`number`}
                                name={`currency`}
                                value={currency}
                                placeholder={`통화`}
                                onChange={this.handleChange}
                            />
                            ¥
                            </span>
                    </div>
                    <div className={`bottom`}>
                        <span className={`equal`}>
                            <FontAwesomeIcon icon={`equals`} />
                        </span>
                        <span className={`won`}>
                            <input
                                type={`number`}
                                name={`won`}
                                value={won}
                                placeholder={`원화`}
                                onChange={this.handleChange}
                            />
                            ₩
                        </span>
                    </div>
                </div>
            </>
        );
    }
}