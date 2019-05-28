import React, { Component } from 'react';

import { Carousel, Box, Information, Map, List, Grid } from '../../components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

import { WeatherService, InstagramService, NaverService } from '../../actions';

import { Replaces } from '../../libs';

export default class Sight extends Component {
    constructor(props) {
        super(props);

        this.state = {
            country: Replaces.fromPlusToSpace(props.match.params.country),
            city: Replaces.fromPlusToSpace(props.match.params.city),
            sight: Replaces.fromPlusToSpace(props.match.params.sight)
        };
    }

    componentDidMount = () => {
        const {
            country,
            city,
            sight
        } = this.state;

        WeatherService.SEARCH(country, city)
            .then((response) => {
                const weather = response.data
                this.setState({
                    weather
                });
            })

        InstagramService.SEARCH(sight)
            .then(response => {
                const instagram = Array.from(response.data, datum => {
                    return {
                        head: {
                            url: datum.thumbnail,
                        },
                        body: {
                            title: `♥︎ ${datum.liked}`,
                            subtitle: datum.published
                        },
                        click: () => {
                            window.open(datum.url);
                        }
                    }
                });
                this.setState({
                    instagram
                });
            });

        NaverService.SEARCH(`${sight} 맛집`)
            .then(response => {
                const naver = Array.from(response.data, datum => {
                    return {
                        icon: `naver`,
                        text:
                            <>
                                <div className={`title`}>{datum.title}</div>
                                <div className={`content`}>
                                    <span className={`published`}>{datum.published}</span>
                                    {datum.description}
                                </div>
                            </>,
                        click: () => {
                            window.open(datum.url);
                        }
                    }
                })
                this.setState({
                    naver
                });
            });
    }

    render = () => {
        const {
            country,
            city,
            sight,
            weather,
            instagram,
            naver,
        } = this.state;

        return (
            <div className={`page`}>
                <div className={`page-container`}>
                    <div className={`sight-carousel`}>
                        <Carousel
                            remote={false}
                            time={2.5}
                            data={[
                                {
                                    item: {
                                        name: `도쿄타워`,
                                        path: `https://image.theminda.com/data/tg/image/item/middle/201803/1520499991_0.png`
                                    },
                                    content:
                                        <>
                                            <div className={`body`}>
                                                <span>도쿄 타워</span>
                                            </div>
                                        </>,
                                },
                            ]}
                        />
                    </div>

                    <Box
                        className={`sight-box`}
                        left={{
                            middle: {
                                className: `sight-information`,
                                head: <span><FontAwesomeIcon icon={`info`} />정보</span>,
                                body:
                                    <Information
                                        weather={weather}
                                    />
                            }
                        }}
                        right={{
                            middle: {
                                className: `sight-map`,
                                head: <span><FontAwesomeIcon icon={`map-marked`} />지도</span>,
                                body:
                                    <Map
                                        country={country}
                                        city={city}
                                        sight={sight}
                                    />
                            }
                        }}
                    />

                    <Box
                        className={`sight-box`}
                        left={{
                            middle: {
                                className: `sight-blog`,
                                head: <span><FontAwesomeIcon icon={`utensils`} />근처 맛집</span>,
                                body:
                                    <List
                                        data={naver}
                                    />
                            }
                        }}
                        right={{
                            top: {
                                className: `sight-route`,
                                head: <span><FontAwesomeIcon icon={`car-side`} />대표 경로</span>,
                                body:
                                    <List
                                        data={[
                                            {
                                                icon: `subway`,
                                                text: `도에이 오에도선 도보 5분`
                                            },
                                            {
                                                icon: `subway`,
                                                text: `도에이 오에도선 도보 5분`
                                            },
                                        ]}
                                    />
                            },
                            bottom: {
                                className: `sight-instagram`,
                                head: <span><FontAwesomeIcon icon={`hashtag`} />인스타그램</span>,
                                body:
                                    <Grid
                                        data={instagram}
                                    />
                            }
                        }}
                    />

                    <Box
                        className={`sight-box`}
                        full={{
                            className: `sight-recommend`,
                            head: <span><FontAwesomeIcon icon={`hand-point-right`} />추천 관광지</span>,
                            body:
                                <Grid
                                    data={[
                                        {
                                            head: {
                                                url: `https://image.theminda.com/data/tg/image/item/middle/201803/1520497801_0.png`
                                            },
                                            body: {
                                                title: `Tokyo SkyTree`,
                                                subtitle: [`전망`, `타워`]
                                            },
                                            from: true,
                                        },
                                        {
                                            head: {
                                                url: `https://www.gotokyo.org/kr/spot/15/images/15_0091_9_750x503.jpg`
                                            },
                                            body: {
                                                title: `Sensoji`,
                                                subtitle: [`사원`]
                                            },
                                            from: true,
                                        },
                                        {
                                            head: {
                                                url: `https://c-lj.gnst.jp/public/article/detail/a/00/00/a0000117/img/basic/a0000117_main.jpg?20181011171722`
                                            },
                                            body: {
                                                title: `Meiji Shrine`,
                                                subtitle: [`신사`]
                                            },
                                            from: true,
                                        },
                                    ]}
                                />
                        }}
                    />
                </div>
            </div>
        );
    }
}