import React, { Component } from 'react';

import { Deck } from '../../components';

export default class Country extends Component {
    render = () => {
        return (
            <div className={`page`}>
                <div className={`page-container`}>
                    <Deck
                        hashtags={[
                            `건축`,
                            `전시관`,
                            `공원`,
                            `축제`,
                        ]}
                        data={[
                            {
                                head: {
                                    url: `https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg`
                                },
                                body: {
                                    title: `JAPAN`,
                                    subtitle: `동아시아의 국가`
                                },
                                from: true,
                            },
                            {
                                head: {
                                    url: `https://c-lj.gnst.jp/public/article/detail/a/00/01/a0001495/img/basic/a0001495_main.jpg?20180709103351`
                                },
                                body: {
                                    title: `TOKYO`,
                                    subtitle: [`박물관`, `황궁`, `메이지신궁`]
                                },
                                to: true,
                                hashtags: [
                                    `건축`,
                                    `전시관`,
                                ]
                            },
                            {
                                head: {
                                    url: `https://cdn.osaka-info.jp/fixtures/around-kansai-kyoto_ko_008.jpg`
                                },
                                body: {
                                    title: `KYOTO`,
                                    subtitle: [`불교사원`, `신토신사`, `니조성`, `게이샤`]
                                },
                                to: true,
                                hashtags: [
                                    `건축`,
                                ]
                            },
                            {
                                head: {
                                    url: `https://img-wishbeen.akamaized.net/plan/1457365896408_%EC%98%A4%EC%82%AC%EC%B9%B4%ED%98%B8%ED%85%94%EC%B6%94%EC%B2%9C2.jpg`
                                },
                                body: {
                                    title: `OSAKA`,
                                    subtitle: [`오사카성`, `밤문화`]
                                },
                                to: true,
                                hashtags: [
                                    `건축`,
                                ]
                            },
                            {
                                head: {
                                    url: `http://ojsfile.ohmynews.com/down/images/1/shinbcl_219392_7[566700].jpg`
                                },
                                body: {
                                    title: `NARA`,
                                    subtitle: [`도다이지사찰`, `청동대불`]
                                },
                                to: true,
                                hashtags: [
                                    `건축`,
                                ]
                            },
                            {
                                head: {
                                    url: `https://travelblog.expedia.co.kr/wp-content/uploads/2016/12/06.jpg`
                                },
                                body: {
                                    title: `SAPPORO`,
                                    subtitle: [`맥주박물관`, `오도리공원`, `스키리조트`]
                                },
                                to: true,
                                hashtags: [
                                    `전시관`,
                                    `공원`,
                                    `축제`,
                                ]
                            },
                        ]}
                    />
                </div>
            </div>
        );
    }
}