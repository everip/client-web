import React, { Component } from 'react';

import { Carousel } from '../../components';

import Images from '../../assets/img';

import Box from './components/Box';
import Wrapper from './components/Wrapper';

import './style.css';

export default class Home extends Component {
    render = () => {
        return (
            <div className={`home`}>
                <div className={`main-carousel`}>
                    <Carousel
                        remote={true}
                        time={2.5}
                        data={[
                            {
                                item: Images.HomeCarouselOsaka,
                                content:
                                    <>
                                        <div className={`head`}>PLANNING A TRIP<br />TO OSAKA?</div>
                                        <div className={`body`}>
                                            <span>#도톤보리</span>
                                            <span>#오사카성</span>
                                            <span>#유니버설스튜디오</span>
                                        </div>
                                    </>,
                            },
                            {
                                item: Images.HomeCarouselBangkok,
                                content:
                                    <>
                                        <div className={`head`}>PLANNING A TRIP<br />TO BANGKOK?</div>
                                        <div className={`body`}>
                                            <span>#왕궁</span>
                                            <span>#박물관</span>
                                            <span>#사원</span>
                                            <span>#카오산거리</span>
                                        </div>
                                    </>,
                            },
                            {
                                item: Images.HomeCarouselDanang,
                                content:
                                    <>
                                        <div className={`head`}>PLANNING A TRIP<br />TO DANANG?</div>
                                        <div className={`body`}>
                                            <span>#오행산</span>
                                            <span>#사원</span>
                                            <span>#박물관</span>
                                            <span>#유적</span>
                                            <span>#롱교</span>
                                        </div>
                                    </>,
                            },
                            {
                                item: Images.HomeCarouselFlorence,
                                content:
                                    <>
                                        <div className={`head`}>PLANNING A TRIP<br />TO FLORENCE?</div>
                                        <div className={`body`}>
                                            <span>#대성당</span>
                                            <span>#우피치미술관</span>
                                            <span>#베키오다리</span>
                                            <span>#베키오궁</span>
                                        </div>
                                    </>,
                            },
                        ]}
                    />
                </div>

                <Wrapper
                    set={`full`}
                    boxes={
                        <Box
                            icon={Images.HomeHelp}
                            content={{
                                head: <p>We make you happy</p>,
                                body: <p>It provides customized travel information for you <br /> and is available free of charge.</p>,
                            }}
                        />
                    }
                />

                <Wrapper
                    set={`right`}
                    left={Images.HomeCarouselBangkok}
                    right={Images.HomeCarouselDanang}
                    boxes={
                        <Box
                            icon={Images.HomeCamera}
                            content={{
                                head: <p>We make you happy</p>,
                                body: <p>It provides customized travel information for you <br /> and is available free of charge.</p>,
                            }}
                        />
                    }
                />

                <Wrapper
                    set={`left`}
                    left={Images.HomeCarouselBangkok}
                    right={Images.HomeCarouselDanang}
                    boxes={
                        <Box
                            icon={Images.HomeHanger}
                            content={{
                                head: <p>We make you happy</p>,
                                body: <p>It provides customized travel information for you <br /> and is available free of charge.</p>,
                            }}
                        />
                    }
                />

                <Wrapper
                    set={`center`}
                    left={Images.HomeCarouselBangkok}
                    right={Images.HomeCarouselDanang}
                    center={Images.HomeCarouselOsaka}
                    boxes={
                        <Box
                            icon={Images.HomeFood}
                            content={{
                                head: <p>We make you happy</p>,
                                body: <p>It provides customized travel information for you <br /> and is available free of charge.</p>,
                            }}
                        />
                    }
                />

                <Wrapper
                    set={`full us`}
                    boxes={
                        <>
                            <Box
                                icon={{ path: 'https://avatars2.githubusercontent.com/u/31611484' }}
                                content={{
                                    head: <p onClick={() => { window.open('https://github.com/sociablesasha') }}>YONGHYUN</p>,
                                    body: <p>DESIGNER, DEVELOPER</p>,
                                }}
                            />
                            <Box
                                icon={{ path: 'https://avatars2.githubusercontent.com/u/46661287' }}
                                content={{
                                    head: <p onClick={() => { window.open('https://github.com/sw-son') }}>SANGWOO</p>,
                                    body: <p>DATA COLLECTOR</p>,
                                }}
                            />
                            <Box
                                icon={{ path: 'https://avatars1.githubusercontent.com/u/0' }}
                                content={{
                                    head: <p onClick={() => { window.open('mailto:sociablesasha@gmail.com') }}>YOU</p>,
                                    body: <p>NEXT TIME, JOIN</p>,
                                }}
                            />
                        </>
                    }
                />
            </div>
        );
    }
}