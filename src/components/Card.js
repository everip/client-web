import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Card extends Component {
    render = () => {
        const {
            head,
            body,
            to,
            click,
            custom,
            active
        } = this.props;

        return (
            <>
                <div
                    className={`card ${active ? 'acitve' : 'deactive'}`}
                >
                    {
                        custom
                            ?
                            <span>Hi</span>
                            :
                            <Link to={to} onClick={click}>
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