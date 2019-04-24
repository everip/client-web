import React, { Component } from 'react';

import './style.css';

import { Card } from '../../';

export default class Deck extends Component {
    constructor(props) {
        super(props);

        let D_hashtags = {};
        props.hashtags.forEach(D_hashtag => {
            D_hashtags[D_hashtag] = false;
        });

        this.state = {
            D_hashtags
        }
    }

    handleActive = (event) => {
        const target = event.target;
        let D_hashtags = this.state.D_hashtags;
        D_hashtags[target.dataset.id] = !target.dataset.value === `true` || target.dataset.value === `false`;
        this.setState({
            D_hashtags
        });
    }

    render = () => {
        const {
            data
        } = this.props;

        const {
            D_hashtags
        } = this.state;

        const D_hashtagsKeys = D_hashtags ? Object.keys(D_hashtags) : NaN;
        const D_hashtagsValues = D_hashtags ? Object.values(D_hashtags) : NaN;

        const is = D_hashtagsValues.find(D_hashtag => true === D_hashtag);

        return (
            <>
                <div className={`deck`}>
                    <div className={`head`}>
                        {
                            D_hashtags &&
                            D_hashtagsKeys.map((D_hashtag, index) =>
                                <span
                                    key={index}
                                    className={D_hashtags[D_hashtag] ? `active` : ``}
                                    data-id={D_hashtag}
                                    data-value={D_hashtags[D_hashtag]}
                                    onClick={this.handleActive}
                                >
                                    {D_hashtag}
                                </span>
                            )
                        }
                    </div>
                    <div className={`body`}>
                        {
                            data && data.map((datum, index) => {
                                const {
                                    head,
                                    body,
                                    to,
                                    from,
                                    custom,
                                    hashtags
                                } = datum;

                                return (
                                    <Card
                                        to={to}
                                        from={from}
                                        active={is && hashtags && hashtags.some(hashtag => D_hashtags[hashtag])}
                                        head={head}
                                        body={body}
                                        custom={custom}
                                        key={index}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </>
        );
    }
}