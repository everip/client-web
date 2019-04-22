import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Replaces } from '../../../libs';

import './style.css';

export default class Card extends Component {
    render = () => {
        const {
            head,
            body,
            to,
            click,
            custom = null,
            active = true
        } = this.props;

        return (
            <>
                <div
                    className={`card ${active ? 'acitve' : 'deactive'}`}
                >
                    {
                        custom
                            ?
                            custom
                            :
                            <Link
                                to={Replaces.fromSpaceToPlus(to)}
                                onClick={
                                    (event) => {
                                        click();
                                        event.preventDefault();
                                    }
                                }
                            >
                                <div className={`content`}>
                                    <div
                                        className={`head`}
                                        style={{
                                            backgroundImage: `url(${head.url})`
                                        }} />
                                    <div className={`body`}>
                                        <div className={`title`}>
                                            {body.title}
                                        </div>
                                        <div className={`subtitle`}>
                                            {
                                                Array.isArray(body.subtitle)
                                                    ? body.subtitle.map((_datum, _index) => <span key={_index}>#{_datum}</span>)
                                                    : body.subtitle
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Link>
                    }
                </div>
            </>
        );
    }
}