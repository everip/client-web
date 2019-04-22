import React, { Component } from 'react';

import { Deck } from '../../../components';

import { URLs } from '../../../libs';

export default class Country extends Component {
    render = () => {
        return (
            <div className={`page`}>
                <div className={`page-container`}>
                    <Deck
                        hashtags={[
                            `타워`,
                            `신사`,
                            `사원`,
                            `공원`,
                            `미술관`
                        ]}
                        data={[
                            {
                                head: {
                                    url: `https://c-lj.gnst.jp/public/article/detail/a/00/01/a0001495/img/basic/a0001495_main.jpg?20180709103351`
                                },
                                body: {
                                    title: `TOKYO`,
                                    subtitle: `일본의 수도`
                                },
                                to: `${URLs.prevPath()}`,
                                from: true
                            },
                            {
                                head: {
                                    url: `https://image.theminda.com/data/tg/image/item/middle/201803/1520497801_0.png`
                                },
                                body: {
                                    title: `Tokyo SkyTree`,
                                    subtitle: [`전망`, `타워`]
                                },
                                to: `${URLs.path()}/Tokyo SkyTree`,
                                hashtags: [
                                    `타워`,
                                ]
                            },
                            {
                                head: {
                                    url: `https://www.gotokyo.org/kr/spot/15/images/15_0091_9_750x503.jpg`
                                },
                                body: {
                                    title: `Sensoji`,
                                    subtitle: [`사원`]
                                },
                                to: `${URLs.path()}/Sensoji`,
                                hashtags: [
                                    `사원`,
                                ]
                            },
                            {
                                head: {
                                    url: `https://image.theminda.com/data/tg/image/item/middle/201803/1520499991_0.png`
                                },
                                body: {
                                    title: `Tokyo Tower`,
                                    subtitle: [`전망`, `타워`]
                                },
                                to: `${URLs.path()}/Tokyo Tower`,
                                hashtags: [
                                    `타워`,
                                ]
                            },
                            {
                                head: {
                                    url: `https://c-lj.gnst.jp/public/article/detail/a/00/00/a0000117/img/basic/a0000117_main.jpg?20181011171722`
                                },
                                body: {
                                    title: `Meiji Shrine`,
                                    subtitle: [`신사`]
                                },
                                to: `${URLs.path()}/Meiji Shrine`,
                                hashtags: [
                                    `신사`
                                ]
                            },
                            {
                                head: {
                                    url: `https://media-cdn.tripadvisor.com/media/photo-s/0f/1f/8c/bf/caption.jpg`
                                },
                                body: {
                                    title: `Ueno Park`,
                                    subtitle: [`공원`, `사원`, `미술관`]
                                },
                                to: `${URLs.path()}/Ueno Park`,
                                hashtags: [
                                    `사원`,
                                    `공원`,
                                    `미술관`
                                ]
                            },
                        ]}
                    />
                </div>
            </div>
        );
    }
}